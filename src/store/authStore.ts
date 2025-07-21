import { create } from 'zustand';
import axios from 'axios';
import { API_ENDPOINTS } from '@/src/config/env';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  token: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  clearError: () => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isLoading: false,
  isAuthenticated: false,
  error: null,

  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(API_ENDPOINTS.AUTH.LOGIN, {
        email,
        password,
      });

      const userData = response.data;

      const user: User = {
        id: userData.id,
        email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        avatar: userData.avatar,
        token: userData.token,
      };

      set({
        user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      let errorMessage = 'Login failed';

      if (axios.isAxiosError(error)) {
        if (error.response?.data?.message) {
          errorMessage = error.response.data.message;
        } else if (error.response?.status === 401) {
          errorMessage = 'Invalid email or password';
        } else if (error.response?.status === 500) {
          errorMessage = 'Server error. Please try again later.';
        } else if (error.code === 'ECONNREFUSED') {
          errorMessage =
            'Unable to connect to server. Please check your connection.';
        }
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      set({
        isLoading: false,
        error: errorMessage,
      });
    }
  },

  logout: () => {
    set({
      user: null,
      isAuthenticated: false,
      error: null,
    });
  },

  clearError: () => {
    set({ error: null });
  },

  setLoading: (loading: boolean) => {
    set({ isLoading: loading });
  },
}));
