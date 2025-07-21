import React, { useEffect } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { dashboardTheme as theme } from '@/src/theme';
import { MessageDetail } from '@/src/store/messagesStore';

interface MessageModalProps {
  visible: boolean;
  message: MessageDetail | null;
  onClose: () => void;
  onMarkAsRead: (id: string) => Promise<void>;
}

const MessageModal: React.FC<MessageModalProps> = ({
  visible,
  message,
  onClose,
  onMarkAsRead,
}) => {
  useEffect(() => {
    if (visible && message && !message.isRead) {
      onMarkAsRead(message.id);
    }
  }, [visible, message, onMarkAsRead]);

  if (!message) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            {message?.avatar && (
              <Image
                source={{ uri: message.avatar }}
                style={styles.headerAvatar}
              />
            )}
            {message?.avatar && (
              <Image
                source={{ uri: message.avatar }}
                style={styles.headerAvatar}
              />
            )}
            <View style={styles.headerInfo}>
              {message?.from && (
                <Text style={styles.headerName}>{message.from}</Text>
              )}
              {message?.role && (
                <Text style={styles.headerRole}>{message.role}</Text>
              )}{' '}
            </View>
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>×</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {message?.subject && (
            <Text style={styles.subject}>{message.subject}</Text>
          )}
          {message?.body && (
            <Text style={styles.messageContent}>{message.body}</Text>
          )}
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    backgroundColor: theme.colors.surface,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 16,
  },
  headerAvatar: {
    width: theme.dimensions.avatar.large,
    height: theme.dimensions.avatar.large,
    borderRadius: theme.dimensions.avatar.large / 2,
    marginRight: 16,
  },
  headerInfo: {
    flex: 1,
  },
  headerName: {
    fontSize: theme.fontSize.xl,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  headerRole: {
    fontSize: theme.fontSize.base,
    color: theme.colors.textLight,
  },
  closeButton: {
    width: theme.dimensions.modal.closeButton,
    height: theme.dimensions.modal.closeButton,
    borderRadius: theme.dimensions.modal.closeButton / 2,
    backgroundColor: theme.colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  closeButtonText: {
    fontSize: 18,
    color: theme.colors.text,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: theme.dimensions.modal.padding,
  },
  subject: {
    fontSize: theme.fontSize.xl,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 8,
  },
  messageContent: {
    fontSize: theme.fontSize.base,
    color: theme.colors.text,
    lineHeight: 24,
  },
});

export default MessageModal;
