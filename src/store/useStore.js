import { create } from 'zustand';
import { apiService } from '../services/api';

export const useStore = create((set, get) => ({
  // Auth State
  user: null,
  token: null,
  isAuthenticated: false,
  
  // Portfolio State
  videos: [],
  isLoading: false,
  error: null,
  
  // Actions
  setVideos: (videos) => set({ videos }),
  
  login: async (username, password) => {
    try {
      set({ isLoading: true, error: null });
      const data = await apiService.login(username, password);
      set({ 
        token: data.access_token, 
        user: { username }, 
        isAuthenticated: true, 
        isLoading: false 
      });
      return true;
    } catch (err) {
      set({ error: err.message, isLoading: false });
      return false;
    }
  },
  
  logout: () => set({ user: null, token: null, isAuthenticated: false }),
  
  fetchVideos: async () => {
    try {
      set({ isLoading: true });
      const videos = await apiService.fetchVideos();
      set({ videos, isLoading: false });
    } catch (err) {
      set({ error: 'Failed to fetch videos', isLoading: false });
    }
  },

  addVideo: async (videoData) => {
    const { token, videos } = get();
    if (!token) return;
    try {
      const newVideo = await apiService.addVideo(videoData, token);
      set({ videos: [newVideo, ...videos] });
    } catch (err) {
      console.error(err);
      alert("Failed to add video");
    }
  },

  deleteVideo: async (id) => {
    const { token, videos } = get();
    if (!token) return;
    try {
      await apiService.deleteVideo(id, token);
      set({ videos: videos.filter(v => v.id !== id) });
    } catch (err) {
      console.error(err);
      alert("Failed to delete video");
    }
  }
}));