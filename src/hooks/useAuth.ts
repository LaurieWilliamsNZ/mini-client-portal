import { useAuthStore } from '@/src/store/authStore';

export const useAuth = () => {
  const {
    user,
    isLoading,
    isAuthenticated,
    error,
    login,
    logout,
    clearError,
    setLoading,
  } = useAuthStore();

  return {
    user,
    isLoading,
    isAuthenticated,
    error,
    login,
    logout,
    clearError,
    setLoading,
  };
};
