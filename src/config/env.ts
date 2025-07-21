// Environment configuration
export const API_BASE_URL = process.env.API_PATH || 'http://localhost:3001';

// API endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/auth/login`,
  },
  MESSAGES: {
    LIST: `${API_BASE_URL}/messages`,
    DETAIL: (id: string) => `${API_BASE_URL}/messages/${id}`,
    MARK_AS_READ: (id: string) => `${API_BASE_URL}/messages/${id}/read`,
  },
}; 