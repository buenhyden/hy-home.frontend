import { readdir, stat } from 'fs/promises';
import { join } from 'path';

const MAX_SIZE_KB = 1000; // 1MB
const MAX_SIZE_BYTES = MAX_SIZE_KB * 1024;

async function checkFileSize(dir, excludePatterns = []) {
  const files = await readdir(dir);
  let hasLargeFiles = false;

  for (const file of files) {
    const filePath = join(dir, file);

    // Skip excluded patterns
    if (excludePatterns.some((pattern) => filePath.includes(pattern))) {
      continue;
    }

    const fileStat = await stat(filePath);

    if (fileStat.isDirectory()) {
      if (!file.startsWith('.') && file !== 'node_modules' && file !== 'dist') {
        const dirHasLarge = await checkFileSize(filePath, excludePatterns);
        hasLargeFiles = hasLargeFiles || dirHasLarge;
      }
    } else if (fileStat.size > MAX_SIZE_BYTES) {
      console.error(
        `❌ File too large: ${filePath} (${(fileStat.size / 1024).toFixed(2)} KB > ${MAX_SIZE_KB} KB)`
      );
      hasLargeFiles = true;
    }
  }

  return hasLargeFiles;
}

const excludePatterns = [
  'node_modules',
  'package-lock.json',
  '.git',
  'dist',
  '.svg',
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
];

try {
  const hasLargeFiles = await checkFileSize('.', excludePatterns);
  if (hasLargeFiles) {
    console.error(
      `\n⚠️  Large files detected. Consider:\n  - Using Git LFS for large assets\n  - Compressing images\n  - Removing unnecessary files\n`
    );
    process.exit(1);
  } else {
    console.log('✅ All files are within size limits');
  }
} catch (error) {
  console.error('Error checking file sizes:', error);
  process.exit(1);
}
