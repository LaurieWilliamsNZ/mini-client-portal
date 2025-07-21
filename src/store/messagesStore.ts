import { create } from 'zustand';
import axios from 'axios';
import { API_ENDPOINTS } from '@/src/config/env';

export interface Message {
  id: string;
  from: string;
  subject: string;
  excerpt: string;
  isRead: boolean;
  timestamp: string;
}

export interface MessageDetail {
  id: string;
  from: string;
  role?: string;
  avatar?: string;
  subject: string;
  body: string;
  isRead: boolean;
  timestamp: string;
}

interface MessagesState {
  messages: Message[];
  messageDetails: Record<string, MessageDetail>;
  isLoading: boolean;
  error: string | null;
  unreadCount: number;
  fetchMessages: () => Promise<void>;
  fetchMessageDetail: (id: string) => Promise<void>;
  markAsRead: (id: string) => Promise<void>;
  clearError: () => void;
}

export const useMessagesStore = create<MessagesState>((set, get) => ({
  messages: [],
  messageDetails: {},
  isLoading: false,
  error: null,
  unreadCount: 0,

  fetchMessages: async () => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.get(API_ENDPOINTS.MESSAGES.LIST);
      const messages = response.data;

      const validMessages = Array.isArray(messages)
        ? messages.filter(
            (msg: any) =>
              msg &&
              typeof msg.id === 'string' &&
              typeof msg.from === 'string' &&
              typeof msg.subject === 'string' &&
              typeof msg.excerpt === 'string' &&
              typeof msg.isRead === 'boolean' &&
              typeof msg.timestamp === 'string' &&
              msg.from.trim() !== '' &&
              msg.subject.trim() !== ''
          )
        : [];

      const unreadCount = validMessages.filter(
        (msg: Message) => !msg.isRead
      ).length;

      set({
        messages: validMessages,
        unreadCount,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      let errorMessage = 'Failed to fetch messages';

      if (axios.isAxiosError(error)) {
        if (error.response?.data?.message) {
          errorMessage = error.response.data.message;
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

  fetchMessageDetail: async (id: string) => {
    const { messageDetails } = get();

    if (messageDetails[id]) {
      return;
    }

    try {
      const response = await axios.get(API_ENDPOINTS.MESSAGES.DETAIL(id));
      const messageDetail = response.data;

      set({
        messageDetails: {
          ...messageDetails,
          [id]: messageDetail,
        },
      });
    } catch (error) {
      let errorMessage = 'Failed to fetch message details';

      if (axios.isAxiosError(error)) {
        if (error.response?.data?.message) {
          errorMessage = error.response.data.message;
        } else if (error.response?.status === 404) {
          errorMessage = 'Message not found';
        } else if (error.response?.status === 500) {
          errorMessage = 'Server error. Please try again later.';
        }
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      set({ error: errorMessage });
    }
  },

  markAsRead: async (id: string) => {
    try {
      await axios.post(API_ENDPOINTS.MESSAGES.MARK_AS_READ(id));

      // Update local state
      const { messages, messageDetails } = get();

      const updatedMessages = messages.map(msg =>
        msg.id === id ? { ...msg, isRead: true } : msg
      );

      const updatedMessageDetails = {
        ...messageDetails,
        ...(messageDetails[id] && {
          [id]: { ...messageDetails[id], isRead: true },
        }),
      };

      // Recalculate unread count from updated messages
      const newUnreadCount = updatedMessages.filter(msg => !msg.isRead).length;

      set({
        messages: updatedMessages,
        messageDetails: updatedMessageDetails,
        unreadCount: newUnreadCount,
      });
    } catch (error) {
      let errorMessage = 'Failed to mark message as read';

      if (axios.isAxiosError(error)) {
        if (error.response?.data?.message) {
          errorMessage = error.response.data.message;
        } else if (error.response?.status === 404) {
          errorMessage = 'Message not found';
        } else if (error.response?.status === 500) {
          errorMessage = 'Server error. Please try again later.';
        }
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      set({ error: errorMessage });
    }
  },

  clearError: () => {
    set({ error: null });
  },
}));
