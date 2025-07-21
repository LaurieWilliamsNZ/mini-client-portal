import * as React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { dashboardTheme as theme } from '@/src/theme';

interface Transaction {
  date: string;
  investment: string;
  type: 'buy' | 'sell';
  amount: string;
}

interface Message {
  sender: string;
  time: string;
  title: string;
  preview: string;
  avatar?: string;
}

interface StockTicker {
  symbol: string;
  name: string;
  price: string;
  changePercent: string;
  changeAmount: string;
  isPositive: boolean;
}

interface InfoDetailCardProps {
  title?: string;
  subtitle?: string;
  value?: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon?: React.ReactNode;
  unreadCount?: number;
  type?: 'tickers' | 'positions' | 'messages';
  transactions?: Transaction[];
  messages?: Message[];
  tickers?: StockTicker[];
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
  type = 'tickers',
  transactions,
  messages,
  tickers,
  testID = 'info-detail-card',
}: InfoDetailCardProps) => {
  const getChangeColor = () => {
    switch (changeType) {
      case 'positive':
        return theme.colors.primary;
      case 'negative':
        return theme.colors.accent;
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

  const renderTickersContent = () => (
    <View style={styles.tickersContainer}>
      {tickers?.map((ticker, index) => (
        <View key={index} style={styles.tickerItem}>
          <View style={styles.tickerLeft}>
            <View style={styles.tickerHeader}>
              <Text style={styles.tickerSymbol}>{ticker.symbol}</Text>
              <Text style={styles.tickerName}>{ticker.name}</Text>
            </View>
            <Text style={styles.tickerPrice}>{ticker.price}</Text>
          </View>
          <View style={styles.tickerRight}>
            <Text
              style={[
                styles.changePercentText,
                {
                  color: ticker.isPositive
                    ? theme.colors.tickerPositive
                    : theme.colors.accent,
                },
              ]}
            >
              {ticker.changePercent}
            </Text>
            <Text
              style={[
                styles.changeAmountText,
                { color: theme.colors.tickerAmount },
              ]}
            >
              {ticker.changeAmount}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );

  const renderPositionsContent = () => (
    <View style={styles.tableContainer}>
      <View style={styles.tableHeader}>
        <View style={styles.tableRow}>
          <View style={styles.tableHeaderCell}>
            <Text style={styles.tableHeaderText}>Date</Text>
          </View>
          <View style={[styles.tableHeaderCell, styles.investmentCell]}>
            <Text style={styles.tableHeaderText}>Investment</Text>
          </View>
          <View style={[styles.tableHeaderCell, styles.typeCell]}>
            <Text style={styles.tableHeaderText}>Type</Text>
          </View>
          <View style={[styles.tableHeaderCell, styles.amountCell]}>
            <Text style={styles.tableHeaderText}>Amount</Text>
          </View>
        </View>
      </View>
      <View style={styles.tableBody}>
        {transactions?.map((transaction, index) => (
          <View
            key={index}
            style={[
              styles.tableRow,
              index === 0 && styles.firstTableRow,
              index === (transactions?.length || 0) - 1 && styles.lastTableRow,
            ]}
          >
            <View style={styles.tableCell}>
              <Text style={styles.tableCellText}>{transaction.date}</Text>
            </View>
            <View style={styles.investmentCell}>
              <Text style={styles.tableCellText}>{transaction.investment}</Text>
            </View>
            <View style={styles.typeCell}>
              <View
                style={[
                  styles.typePill,
                  transaction.type === 'buy' ? styles.buyPill : styles.sellPill,
                ]}
              >
                <Text
                  style={[
                    styles.typeText,
                    transaction.type === 'buy'
                      ? styles.buyText
                      : styles.sellText,
                  ]}
                >
                  {transaction.type === 'buy' ? 'Buy' : 'Sell'}
                </Text>
              </View>
            </View>
            <View style={styles.amountCell}>
              <Text style={styles.tableCellText}>{transaction.amount}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );

  const renderMessagesContent = () => (
    <View style={styles.messagesContainer}>
      {messages?.map((message, index) => (
        <View
          key={index}
          style={[
            styles.messageItem,
            index === (messages?.length || 0) - 1 && styles.lastMessageItem,
          ]}
        >
          <View style={styles.messageAvatar}>
            <Image
              source={{ uri: `https://i.pravatar.cc/80?img=${index + 1}` }}
              style={styles.avatarImage}
            />
          </View>
          <View style={styles.messageContent}>
            <View style={styles.messageHeader}>
              <Text style={styles.messageSender}>{message.sender}</Text>
              <Text style={styles.messageTime}>{message.time}</Text>
            </View>
            <Text style={styles.messageTitle}>{message.title}</Text>
            <Text
              style={styles.messagePreview}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {message.preview}
            </Text>
          </View>
          <View style={styles.messageIndicator} />
        </View>
      ))}
      <View style={styles.viewAllButton}>
        <Text style={styles.viewAllText}>View All Messages</Text>
      </View>
    </View>
  );

  const renderContent = () => {
    switch (type) {
      case 'positions':
        return renderPositionsContent();
      case 'messages':
        return renderMessagesContent();
      default:
        return renderTickersContent();
    }
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

        <View style={styles.headerDivider} />

        {renderContent()}
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
  headerDivider: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginBottom: 0,
    marginHorizontal: -theme.spacing(3),
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
    alignItems: 'flex-start',
    gap: theme.spacing(2),
  },
  iconContainer: {
    marginLeft: theme.spacing(2),
  },
  unreadPill: {
    backgroundColor: theme.colors.unreadPillBg,
    borderRadius: 9999,
    height: 24,
    width: 67,
    position: 'relative',
  },
  unreadText: {
    position: 'absolute',
    top: 3,
    left: 8,
    ...theme.customFonts.unreadText,
    color: theme.colors.unreadText,
    textAlign: 'left',
    width: 51,
    height: 16,
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
  changePercentText: {
    ...theme.fonts.medium,
    fontSize: theme.fontSize.lg,
    lineHeight: 24,
    marginBottom: theme.spacing(0.25),
  },
  changeAmountText: {
    ...theme.fonts.regular,
    fontSize: theme.fontSize.base,
    lineHeight: 20,
  },
  // Table styles
  tableContainer: {
    marginTop: 0,
    marginHorizontal: -theme.spacing(3),
  },
  tableHeader: {
    backgroundColor: theme.colors.backgroundLight,
  },
  tableRow: {
    flexDirection: 'row',
    height: 45,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  firstTableRow: {
    borderTopWidth: 0,
  },
  lastTableRow: {
    borderBottomWidth: 0,
  },
  tableHeaderCell: {
    flex: 1,
    paddingHorizontal: theme.spacing(2),
    paddingVertical: theme.spacing(1),
  },
  tableHeaderText: {
    ...theme.fonts.medium,
    fontSize: theme.fontSize.sm,
    color: theme.colors.text,
  },
  tableBody: {
    backgroundColor: theme.colors.surface,
  },
  tableCell: {
    flex: 1,
    paddingHorizontal: theme.spacing(2),
    paddingVertical: theme.spacing(1),
  },
  typeCell: {
    flex: 1.2,
    paddingHorizontal: theme.spacing(1),
    paddingVertical: theme.spacing(1),
    alignItems: 'center',
  },
  investmentCell: {
    flex: 2,
    paddingHorizontal: theme.spacing(1),
    paddingVertical: theme.spacing(1),
  },
  amountCell: {
    flex: 1.5,
    paddingHorizontal: theme.spacing(1),
    paddingVertical: theme.spacing(1),
  },
  tableCellText: {
    ...theme.customFonts.tableText,
    color: theme.colors.text,
    textAlign: 'left',
    height: 18,
  },
  typePill: {
    alignSelf: 'flex-start',
    borderRadius: 4,
    height: 23,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  buyPill: {
    backgroundColor: theme.colors.buyPillBg,
  },
  sellPill: {
    backgroundColor: theme.colors.sellPillBg,
  },
  typeText: {
    ...theme.customFonts.tableTextMedium,
    textAlign: 'center',
  },
  buyText: {
    color: theme.colors.buyText,
  },
  sellText: {
    color: theme.colors.sellText,
  },
  // Messages styles
  messagesContainer: {
    marginTop: 0,
  },
  messageItem: {
    flexDirection: 'row',
    paddingVertical: theme.spacing(2),
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    marginHorizontal: -theme.spacing(3),
    paddingHorizontal: theme.spacing(3),
  },
  lastMessageItem: {
    borderBottomWidth: 0,
  },
  messageAvatar: {
    marginRight: theme.spacing(2),
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.border,
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(0.5),
  },
  messageSender: {
    ...theme.customFonts.messageTextMedium,
    lineHeight: 20,
    color: theme.colors.messageSender,
    textAlign: 'left',
    height: 20,
  },
  messageTime: {
    width: 39,
    ...theme.customFonts.tableText,
    lineHeight: 16,
    color: theme.colors.messageTime,
    textAlign: 'left',
    height: 16,
  },
  messageTitle: {
    ...theme.customFonts.messageText,
    lineHeight: 20,
    color: theme.colors.messageTitle,
    textAlign: 'left',
    height: 20,
    marginBottom: theme.spacing(0.5),
  },
  messagePreview: {
    ...theme.customFonts.tableText,
    lineHeight: 16,
    color: theme.colors.messagePreview,
    textAlign: 'left',
    height: 16,
  },
  messageIndicator: {
    width: 8,
    height: 8,
    borderRadius: 9999,
    backgroundColor: theme.colors.messageIndicator,
    marginLeft: theme.spacing(2),
  },
  viewAllButton: {
    height: 50,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    marginHorizontal: -theme.spacing(3),
    paddingHorizontal: theme.spacing(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewAllText: {
    ...theme.customFonts.viewAllText,
    color: theme.colors.viewAllText,
    textAlign: 'center',
  },
  // Ticker styles
  tickersContainer: {
    marginTop: theme.spacing(2),
  },
  tickerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing(1.5),
    paddingHorizontal: theme.spacing(2),
    backgroundColor: theme.colors.backgroundLight,
    marginBottom: theme.spacing(1),
    borderRadius: theme.borderRadius.base,
  },
  tickerLeft: {
    flex: 1,
  },
  tickerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing(0.25),
  },
  tickerSymbol: {
    ...theme.fonts.bold,
    fontSize: theme.fontSize.base,
    color: theme.colors.text,
    marginRight: theme.spacing(1),
  },
  tickerName: {
    ...theme.fonts.regular,
    fontSize: theme.fontSize.base,
    color: theme.colors.text,
  },
  tickerPrice: {
    ...theme.fonts.bold,
    fontSize: theme.fontSize.lg,
    color: theme.colors.text,
  },
  tickerRight: {
    alignItems: 'flex-end',
  },
  tickerChangePercent: {
    ...theme.fonts.bold,
    fontSize: theme.fontSize.lg,
    marginBottom: theme.spacing(0.5),
  },
  tickerChangeAmount: {
    ...theme.fonts.regular,
    fontSize: theme.fontSize.sm,
    color: theme.colors.text,
  },
});

export default InfoDetailCard;
