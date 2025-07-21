import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { dashboardTheme as theme } from '@/src/theme';
import { IconButton } from 'react-native-paper';
import LogoSVG from './LogoSVG';

interface HeaderProps {
  userName?: string;
  userAvatar?: string;
  unreadMessages?: number;
  onMessagePress?: () => void;
  onProfilePress?: () => void;
  testID?: string;
}

const Header: React.FC<HeaderProps> = ({
  userName = 'John Doe',
  userAvatar,
  unreadMessages = 5,
  onMessagePress,
  onProfilePress,
  testID = 'header',
}) => {
  return (
    <View style={styles.container} testID={testID}>
      {/* Brand Section */}
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <LogoSVG width={16} height={16} color={theme.colors.surface} />
          </View>
        </View>
        <Text style={styles.brandName}>WealthWise</Text>
      </View>

      {/* Right Section */}
      <View style={styles.rightSection}>
        {/* Message Notification */}
        <TouchableOpacity
          style={styles.messageContainer}
          onPress={onMessagePress}
          testID="header-message-button"
        >
          <IconButton
            icon="email-outline"
            size={24}
            iconColor={theme.colors.headerMessageIcon}
            style={styles.messageIcon}
          />
          {unreadMessages > 0 && (
            <View style={styles.messageBadge}>
              <Text style={styles.messageBadgeText}>{unreadMessages}</Text>
            </View>
          )}
        </TouchableOpacity>

        {/* User Profile */}
        <TouchableOpacity
          style={styles.profileContainer}
          onPress={onProfilePress}
          testID="header-profile-button"
        >
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/80?img=1' }}
              style={styles.avatar}
            />
          </View>
          <Text style={styles.userName}>{userName}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: theme.colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.headerBorder,
  },
  brandSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    marginRight: 12,
  },
  logo: {
    width: 32,
    height: 32,
    backgroundColor: theme.colors.headerLogoBg,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoIcon: {
    // SVG styling handled by LogoSVG component
  },
  brandName: {
    ...theme.customFonts.headerBrand,
    color: theme.colors.headerBrandText,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  messageContainer: {
    position: 'relative',
    padding: 4,
  },
  messageIcon: {
    margin: 0,
    padding: 0,
  },
  messageBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: theme.colors.headerMessageBadge,
    borderRadius: 9999,
    minWidth: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  messageBadgeText: {
    ...theme.customFonts.headerMessageBadge,
    color: theme.colors.headerMessageBadgeText,
    textAlign: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatarContainer: {
    marginRight: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  avatarPlaceholder: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: theme.colors.headerAvatarBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarPlaceholderText: {
    ...theme.customFonts.headerAvatar,
    color: theme.colors.headerAvatarText,
  },
  userName: {
    ...theme.customFonts.headerUserName,
    color: theme.colors.headerUserName,
  },
});

export default Header;
