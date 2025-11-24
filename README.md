# 🎬 hy-home.frontend

> Creative Portfolio - 시각적 스토리텔링을 위한 비디오 포트폴리오 웹 애플리케이션

[![React](https://img.shields.io/badge/React-19.2.0-61dafb?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646cff?logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Zustand](https://img.shields.io/badge/Zustand-5.0.8-000000)](https://github.com/pmndrs/zustand)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

---

## 📖 목차

- [프로젝트 소개](#-프로젝트-소개)
- [주요 기능](#-주요-기능)
- [기술 스택](#-기술-스택)
- [프로젝트 구조](#-프로젝트-구조)
- [시작하기](#-시작하기)
- [개발 가이드](#-개발-가이드)
- [Git Flow 워크플로우](#-git-flow-워크플로우)
- [Docker 배포](#-docker-배포)
- [라이선스](#-라이선스)

---

## 🎯 프로젝트 소개

**hy-home.frontend**는 크리에이티브 디렉터 및 모션 디자이너를 위한 현대적이고 세련된 비디오 포트폴리오 웹 애플리케이션입니다. 브랜드의 가치를 시각적 언어로 표현하는 작업물들을 효과적으로 전시하고 관리할 수 있습니다.

### 주요 특징

- 🎨 **현대적인 디자인**: Dark 테마 기반의 프리미엄 UI/UX
- 🎬 **비디오 포트폴리오**: YouTube 임베드 지원
- 🔍 **검색 및 필터링**: 실시간 프로젝트 검색, 카테고리별 필터
- 🔐 **관리자 기능**: 로그인/인증, 프로젝트 업로드 및 삭제
- 📱 **반응형 디자인**: 모바일부터 데스크톱까지 완벽 대응
- ⚡ **빠른 성능**: Vite 기반 빌드, 최적화된 번들링

---

## ✨ 주요 기능

### 👥 방문자 기능

- **포트폴리오 탐색**: 카테고리별 비디오 프로젝트 탐색
- **검색 및 필터**: 제목, 설명으로 프로젝트 검색, 카테고리별 필터링
- **비디오 재생**: YouTube 임베드를 통한 원활한 비디오 재생
- **반응형 그리드**: 다양한 화면 크기에 최적화된 레이아웃

### 🔐 관리자 기능

- **로그인/인증**: JWT 기반 인증 시스템
- **프로젝트 업로드**: 새로운 비디오 프로젝트 추가
- **프로젝트 삭제**: 기존 프로젝트 제거
- **실시간 업데이트**: 변경 사항 즉시 반영

---

## 🛠 기술 스택

### Core

- **React 19.2.0**: 최신 React, Hooks 및 Concurrent Features 활용
- **Vite 7.2.4**: 빠른 개발 서버 및 최적화된 빌드
- **JavaScript (ES6+)**: 모던 자바스크립트 문법

### 상태 관리

- **Zustand 5.0.8**: 경량 상태 관리 라이브러리
  - 글로벌 상태: 인증, 비디오 목록, 로딩 상태
  - 액션: login, logout, fetchVideos, addVideo, deleteVideo

### 스타일링

- **TailwindCSS 3.4.17**: Utility-first CSS 프레임워크
- **PostCSS**: CSS 전처리 및 최적화
- **lucide-react**: 모던 아이콘 라이브러리

### 개발 도구

- **ESLint 9.39.1**: 코드 품질 검사
- **Prettier 3.6.2**: 코드 포맷팅
- **Husky 9.0.11**: Git hooks 관리
- **lint-staged 15.2.2**: 스테이징 파일 린팅
- **Docker**: 컨테이너화 및 배포

### 빌드 플러그인

- **@vitejs/plugin-react-swc**: SWC를 사용한 Fast Refresh

---

## 📁 프로젝트 구조

```
hy-home.frontend/
├── .github/
│   └── workflows/          # GitHub Actions CI/CD
│       ├── ci.yml          # 빌드 및 린트 자동화
│       ├── cd.yml          # Docker 이미지 빌드/배포
│       └── release.yml     # 릴리스 자동화
├── .husky/
│   └── pre-commit          # Git pre-commit hooks
├── public/                 # 정적 파일
├── src/
│   ├── components/         # React 컴포넌트
│   │   ├── features/       # 기능별 컴포넌트
│   │   │   ├── admin/      # 관리자 기능
│   │   │   │   ├── LoginModal.jsx      # 로그인 모달
│   │   │   │   └── UploadModal.jsx     # 업로드 모달
│   │   │   └── video/
│   │   │       └── VideoCard.jsx       # 비디오 카드 컴포넌트
│   │   ├── layout/         # 레이아웃 컴포넌트
│   │   │   ├── Navbar.jsx  # 네비게이션 바
│   │   │   └── Footer.jsx  # 푸터
│   │   └── ui/             # 재사용 가능한 UI 컴포넌트
│   │       ├── Button.jsx  # 버튼 컴포넌트
│   │       ├── Input.jsx   # 입력 컴포넌트
│   │       └── Modal.jsx   # 모달 컴포넌트
│   ├── pages/              # 페이지 컴포넌트
│   │   └── Home.jsx        # 메인 홈 페이지
│   ├── services/           # API 서비스 레이어
│   │   └── api.js          # API 호출 함수 (Real/Mock 지원)
│   ├── store/              # Zustand 상태 관리
│   │   └── useStore.js     # 글로벌 스토어
│   ├── config/             # 설정 파일
│   │   └── constants.js    # 상수 및 환경 설정
│   ├── data/               # Mock 데이터
│   │   └── mockVideos.js   # 개발용 Mock 비디오 데이터
│   ├── utils/              # 유틸리티 함수
│   ├── App.jsx             # 루트 컴포넌트
│   ├── main.jsx            # 앱 엔트리 포인트
│   └── index.css           # 글로벌 스타일 + Tailwind directives
├── scripts/                # 커스텀 스크립트
│   └── check-file-size.js  # 파일 크기 체크
├── .dockerignore           # Docker 제외 파일
├── .env.example            # 환경 변수 예제
├── .eslintrc.config.js     # ESLint 설정
├── .gitmessage             # Git 커밋 메시지 템플릿
├── .prettierrc             # Prettier 설정
├── docker-compose.yml      # Docker Compose 설정
├── Dockerfile              # Docker 이미지 빌드
├── nginx.conf              # Nginx 서버 설정
├── package.json            # 프로젝트 의존성
├── tailwind.config.js      # TailwindCSS 설정
└── vite.config.js          # Vite 설정
```

### 주요 디렉토리 설명

- **`src/components/`**: 재사용 가능한 React 컴포넌트
  - `features/`: 도메인별 기능 컴포넌트 (admin, video)
  - `layout/`: 공통 레이아웃 (Navbar, Footer)
  - `ui/`: 기본 UI 빌딩 블록 (Button, Input, Modal)
- **`src/pages/`**: 라우트별 페이지 컴포넌트
- **`src/services/`**: API 통신 로직 분리
- **`src/store/`**: Zustand를 사용한 중앙집중식 상태 관리
- **`src/config/`**: 애플리케이션 설정 및 상수

---

## 🚀 시작하기

### 필수 요구사항

- **Node.js**: 20.x 이상
- **npm**: 10.x 이상
- **Git**: 최신 버전

### 1️⃣ 저장소 클론

```bash
git clone https://github.com/buenhyden/hy-home.frontend.git
cd hy-home.frontend
```

### 2️⃣ 의존성 설치

```bash
npm install
```

### 3️⃣ 환경 변수 설정

`.env.example` 파일을 `.env`로 복사하고 필요에 따라 수정합니다:

```bash
cp .env.example .env
```

**.env 파일 예시**:

```bash
# Vite 환경 변수 (VITE_ 접두사 필수)
VITE_API_URL=http://localhost:8000/api
VITE_APP_ENV=development

# Docker 환경 변수
IMAGE_TAG=latest
REGISTRY=ghcr.io
IMAGE_NAME=buenhyden/hy-home.frontend
PORT=3000
NODE_ENV=production
```

### 4️⃣ 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:5173](http://localhost:5173) 접속

### 5️⃣ 프로덕션 빌드

```bash
npm run build
npm run preview  # 빌드된 파일 로컬 프리뷰
```

---

## 🧑‍💻 개발 가이드

### Git 설정

#### 커밋 메시지 템플릿 설정

일관된 커밋 메시지 작성을 위해 템플릿을 설정합니다:

```bash
git config commit.template .gitmessage
```

#### Pre-commit Hooks 설정

Husky를 사용하여 커밋 전 자동 검사를 설정합니다:

```bash
npm run prepare  # Husky 초기화 (package.json에 이미 포함됨)
```

**Pre-commit 체크 항목**:

- 🔍 Merge conflict 마커 검사
- 🎨 ESLint 자동 수정 (`--fix`)
- ✨ Prettier 자동 포맷팅
- 📝 YAML/JSON/MD 파일 포맷팅

### 사용 가능한 npm 스크립트

| 명령어                          | 설명                      |
| ------------------------------- | ------------------------- |
| `npm run dev`                   | 개발 서버 시작 (HMR 지원) |
| `npm run build`                 | 프로덕션 빌드             |
| `npm run preview`               | 빌드된 파일 로컬 프리뷰   |
| `npm run lint`                  | ESLint 검사               |
| `npm run lint:fix`              | ESLint 자동 수정          |
| `npm run format`                | Prettier 포맷팅           |
| `npm run check:merge-conflicts` | Merge conflict 마커 검사  |
| `npm run check:file-size`       | 파일 크기 검사            |

### 코드 스타일

- **ESLint**: React, Hooks 규칙 적용
- **Prettier**: 일관된 코드 포맷팅
  - Tab Width: 2 spaces
  - Single Quotes: true
  - Trailing Comma: es5
  - End of Line: lf

### API 모드 전환

`src/config/constants.js`에서 API 모드를 전환할 수 있습니다:

```javascript
export const CONFIG = {
  API_URL: 'http://localhost:8000',
  USE_REAL_API: false, // true: FastAPI 사용, false: Mock 데이터 사용
};
```

- **Mock 모드** (`USE_REAL_API: false`): 백엔드 없이 프론트엔드만 개발
- **Real API 모드** (`USE_REAL_API: true`): FastAPI 백엔드와 연동

### Mock 로그인 정보

Mock 모드에서 관리자 로그인 시 사용:

- **Username**: `admin`
- **Password**: `1234`

---

## 🌿 Git Flow 워크플로우

이 프로젝트는 **Git Flow** 브랜치 전략을 사용합니다.

### 브랜치 구조

| 브랜치      | 용도                                  | 수명 |
| ----------- | ------------------------------------- | ---- |
| `main`      | 프로덕션 배포용 (항상 배포 가능 상태) | 영구 |
| `develop`   | 개발 통합 브랜치                      | 영구 |
| `feature/*` | 새로운 기능 개발                      | 임시 |
| `release/*` | 릴리스 준비 (버그 수정, 문서화)       | 임시 |
| `hotfix/*`  | 긴급 버그 수정                        | 임시 |

### CI/CD 워크플로우

#### CI (Continuous Integration)

**트리거**: `develop`, `feature/*`, `release/*`, `hotfix/*` 브랜치로 push 또는 PR

**작업**:

1. 의존성 설치 (`npm ci`)
2. ESLint 검사 (`npm run lint`)
3. 빌드 테스트 (`npm run build`)

#### CD (Continuous Deployment)

**트리거**: `main` 또는 `develop` 브랜치로 push

**작업**: Docker 이미지 빌드 및 GitHub Container Registry에 푸시

**이미지 태그 전략**:

- `main` 브랜치: `latest`, `sha-xxxxxx` (프로덕션)
- `develop` 브랜치: `dev`, `develop-sha-xxxxxx` (개발)

#### Release 자동화

**트리거**: `release/*` 브랜치로 push

**작업**:

1. 브랜치 이름에서 버전 추출 (예: `release/1.0.0` → `1.0.0`)
2. Docker 이미지 빌드: `1.0.0`, `rc-1.0.0`, `1.0.0-sha-xxxxxx`
3. Git 태그 자동 생성: `v1.0.0`

### 개발 워크플로우 예시

#### 1. 새로운 기능 개발

```bash
# develop 브랜치에서 시작
git checkout develop
git pull origin develop

# feature 브랜치 생성
git checkout -b feature/video-sorting

# 작업 후 커밋
git add .
git commit -m "feat: add video sorting functionality"
git push origin feature/video-sorting

# GitHub에서 develop으로 PR 생성
# → CI 워크플로우 자동 실행 (lint + build)
```

#### 2. 릴리스 준비

```bash
# develop에서 release 브랜치 생성
git checkout develop
git checkout -b release/1.0.0

# 버전 업데이트, 최종 버그 수정
# package.json의 version 필드 업데이트
git add .
git commit -m "chore: bump version to 1.0.0"
git push origin release/1.0.0

# → Release 워크플로우 자동 실행
# → Docker 이미지 생성: 1.0.0, rc-1.0.0
# → Git 태그 생성: v1.0.0

# main으로 머지
git checkout main
git merge release/1.0.0
git push origin main

# develop으로 머지
git checkout develop
git merge release/1.0.0
git push origin develop

# release 브랜치 삭제
git branch -d release/1.0.0
git push origin --delete release/1.0.0
```

#### 3. 긴급 수정 (Hotfix)

```bash
# main에서 hotfix 브랜치 생성
git checkout main
git checkout -b hotfix/1.0.1

# 버그 수정
git add .
git commit -m "fix: critical security vulnerability"
git push origin hotfix/1.0.1

# main으로 머지 (즉시 배포)
git checkout main
git merge hotfix/1.0.1
git tag v1.0.1
git push origin main --tags

# develop으로도 머지
git checkout develop
git merge hotfix/1.0.1
git push origin develop

# hotfix 브랜치 삭제
git branch -d hotfix/1.0.1
git push origin --delete hotfix/1.0.1
```

---

## 🐳 Docker 배포

### Docker Compose로 실행

#### 개발 환경

```bash
# .env 파일 생성
echo "IMAGE_TAG=dev" > .env

# 컨테이너 시작
docker-compose up -d

# 로그 확인
docker-compose logs -f

# 접속: http://localhost:3000
```

#### 프로덕션 환경

```bash
# .env 파일 생성
echo "IMAGE_TAG=latest" > .env

# 컨테이너 시작
docker-compose up -d
```

### Docker 이미지 직접 빌드

```bash
# 이미지 빌드
docker build -t hy-home-frontend:latest .

# 컨테이너 실행
docker run -d \
  --name hy-home-frontend \
  -p 3000:80 \
  hy-home-frontend:latest
```

### GitHub Container Registry에서 이미지 가져오기

```bash
# 프로덕션 이미지 (latest)
docker pull ghcr.io/buenhyden/hy-home.frontend:latest

# 개발 이미지 (dev)
docker pull ghcr.io/buenhyden/hy-home.frontend:dev

# 특정 버전
docker pull ghcr.io/buenhyden/hy-home.frontend:1.0.0
```

### Nginx 설정

포트 및 프록시 설정을 변경하려면 `nginx.conf`를 수정하세요:

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 정적 파일 캐싱
    location ~* \\.(?:ico|css|js|gif|jpe?g|png|woff2?|eot|ttf|svg)$ {
        expires 6M;
        access_log off;
        add_header Cache-Control "public";
    }
}
```

---

## 📝 라이선스

이 프로젝트는 **Apache License 2.0**에 따라 라이선스가 부여됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

---

## 🤝 기여하기

1. 이 저장소를 Fork 합니다
2. Feature 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경 사항을 커밋합니다 (`git commit -m 'feat: add amazing feature'`)
4. 브랜치에 Push 합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

---

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해주세요.

---

**Made with ❤️ by Creative Team**
