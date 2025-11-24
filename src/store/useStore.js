import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware'; // 미들웨어 import
import { apiService } from '../services/api';

export const useStore = create(
  persist(
    (set, get) => ({
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
            isLoading: false,
          });
          return true;
        } catch (err) {
          set({ error: err.message, isLoading: false });
          return false;
        }
      },
      // 로그아웃 시 로컬 스토리지 데이터도 함께 초기화됨
      logout: () => {
        set({ user: null, token: null, isAuthenticated: false });
        // 선택사항: 로그아웃 시 비디오 목록도 비우려면 아래 주석 해제
        // set({ videos: [] });
      },

      fetchVideos: async () => {
        try {
          set({ isLoading: true });
          const videos = await apiService.fetchVideos();
          set({ videos, isLoading: false });
        } catch (err) {
          set({ error: err.message, isLoading: false });
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
          alert('Failed to add video');
        }
      },

      deleteVideo: async (id) => {
        const { token, videos } = get();
        if (!token) return;
        try {
          await apiService.deleteVideo(id, token);
          set({ videos: videos.filter((v) => v.id !== id) });
        } catch (err) {
          console.error(err);
          alert('Failed to delete video');
        }
      },
    }),
    {
      name: 'portfolio-storage', // 로컬 스토리지에 저장될 키 이름
      storage: createJSONStorage(() => localStorage), // 저장소 설정 (기본값: localStorage)
      // 저장할 상태만 선별 (로딩 상태나 에러는 저장하지 않음)
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        videos: state.videos, // 비디오 목록도 캐싱하여 UX 향상
      }),
    }
  )
);
