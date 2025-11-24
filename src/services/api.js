import { CONFIG } from '../config/constants';
import { MOCK_VIDEOS } from '../data/mockVideos';

export const apiService = {
  login: async (username, password) => {
    if (CONFIG.USE_REAL_API) {
      const formData = new URLSearchParams();
      formData.append('username', username);
      formData.append('password', password);
      const res = await fetch(`${CONFIG.API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData,
      });
      if (!res.ok) throw new Error('Login failed');
      return res.json(); // returns { access_token, token_type }
    } else {
      // Mock Login
      if (username === 'admin' && password === '1234') {
        return Promise.resolve({
          access_token: 'mock_jwt_token_xyz',
          token_type: 'bearer',
        });
      }
      return Promise.reject(
        new Error('Invalid credentials (Try: admin / 1234)')
      );
    }
  },

  fetchVideos: async () => {
    if (CONFIG.USE_REAL_API) {
      const res = await fetch(`${CONFIG.API_URL}/videos`);
      return res.json();
    }
    return Promise.resolve(MOCK_VIDEOS);
  },

  addVideo: async (video, token) => {
    if (CONFIG.USE_REAL_API) {
      const res = await fetch(`${CONFIG.API_URL}/videos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(video),
      });
      return res.json();
    }
    return Promise.resolve({ ...video, id: Date.now() });
  },

  deleteVideo: async (id, token) => {
    if (CONFIG.USE_REAL_API) {
      await fetch(`${CONFIG.API_URL}/videos/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      return true;
    }
    return Promise.resolve(true);
  },
};
