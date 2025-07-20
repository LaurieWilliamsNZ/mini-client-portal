import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { theme } from '@/src/theme';

interface InfoDetailCardProps {
  title?: string;
  subtitle?: string;
  value?: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon?: React.ReactNode;
  unreadCount?: number;
  testID?: string;
}

const InfoDetailCard = ({
  title,
  subtitle,
  value,
  change,
  changeType = 'neutral',
  icon,
  unreadCount,
  testID = 'info-detail-card',
}: InfoDetailCardProps) => {
  const getChangeColor = () => {
    switch (changeType) {
      case 'positive':
        return '#16a34a';
      case 'negative':
        return '#dc2626';
      case 'neutral':
      default:
        return theme.colors.textLight;
    }
  };

  const getChangeIcon = () => {
    if (changeType === 'positive') {
      return '↗';
    } else if (changeType === 'negative') {
      return '↘';
    }
    return '';
  };

  return (
    <View style={styles.container} testID={testID}>
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.titleSection}>
            {title && (
              <Text style={styles.title} testID="detail-card-title">
                {title}
              </Text>
            )}
            {subtitle && (
              <Text style={styles.subtitle} testID="detail-card-subtitle">
                {subtitle}
              </Text>
            )}
          </View>
          <View style={styles.headerRight}>
            {unreadCount !== undefined && unreadCount > 0 && (
              <View style={styles.unreadPill}>
                <Text style={styles.unreadText} testID="detail-card-unread">
                  {unreadCount} unread
                </Text>
              </View>
            )}
            {icon && <View style={styles.iconContainer}>{icon}</View>}
          </View>
        </View>

        <View style={styles.content}>
          {value && (
            <Text style={styles.value} testID="detail-card-value">
              {value}
            </Text>
          )}
          {change && (
            <View style={styles.changeContainer}>
              <Text
                style={[styles.changeText, { color: getChangeColor() }]}
                testID="detail-card-change"
              >
                {getChangeIcon()} {change}
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Removed marginBottom to use gap from parent container
  },
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing(3),
    shadowColor: theme.colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 3,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing(2),
  },
  titleSection: {
    flex: 1,
  },
  title: {
    ...theme.fonts.medium,
    color: theme.colors.text,
    marginBottom: theme.spacing(0.5),
  },
  subtitle: {
    ...theme.fonts.regular,
    color: theme.colors.textHint,
    fontSize: theme.fontSize.sm,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(2),
  },
  iconContainer: {
    marginLeft: theme.spacing(2),
  },
  unreadPill: {
    backgroundColor: '#fee2e2',
    borderRadius: 9999,
    paddingHorizontal: theme.spacing(2),
    paddingVertical: theme.spacing(1),
  },
  unreadText: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
    color: '#991b1b',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  value: {
    ...theme.fonts.bold,
    color: theme.colors.text,
    fontSize: theme.fontSize.xl,
  },
  changeContainer: {
    alignItems: 'flex-end',
  },
  changeText: {
    ...theme.fonts.regular,
    fontSize: theme.fontSize.sm,
  },
});

export default InfoDetailCard;
