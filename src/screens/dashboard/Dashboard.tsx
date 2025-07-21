// src/screens/DashboardScreen.tsx
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Text } from 'react-native-paper';
import Button from '@/src/components/button/primaryButton';
import { theme } from '@/src/theme';
import { useAuthStore } from '@/src/store/authStore';
import InfoCard from './components/infoCard/InfoCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import InfoDetailCard from './components/InfoDetailCard';
import Header from '@/src/components/Header';

const DashboardScreen = () => {
  const { user, logout } = useAuthStore();
  const [animationDelay, setAnimationDelay] = React.useState(0);

  React.useEffect(() => {
    // Small delay to ensure smooth initial render
    const timer = setTimeout(() => {
      setAnimationDelay(300);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMessagePress = () => {
    // Handle message button press
    console.log('Message button pressed');
  };

  const handleProfilePress = () => {
    // Handle profile button press
    console.log('Profile button pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        userName={user?.name || 'John Doe'}
        unreadMessages={5}
        onMessagePress={handleMessagePress}
        onProfilePress={handleProfilePress}
      />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>
            Welcome back, {user?.name || 'John'}
          </Text>
          <Text style={styles.welcomeSubtext}>
            Here's what's happening with your investments today
          </Text>
        </View>

        <View style={styles.cardsContainer}>
          <InfoCard
            title="Total Portfolio Value"
            value="$127,450"
            icon="wallet"
            change="+2.4% from last month"
            animated={animationDelay > 0}
            animationDelay={animationDelay > 0 ? 0 : 0}
          />
          <InfoCard
            title="Active Investments"
            value="6"
            icon="investment"
            change="Across 4 sectors"
            textStyle="standard"
            animated={animationDelay > 0}
            animationDelay={animationDelay > 0 ? 200 : 0}
          />
          <InfoCard
            title="Recent Return Rate"
            value="8.4%"
            icon="return"
            change="Above market average"
            animated={animationDelay > 0}
            animationDelay={animationDelay > 0 ? 400 : 0}
          />
        </View>

        <View style={styles.detailCardsContainer}>
          <InfoDetailCard
            title="Market Watch"
            subtitle="Real-time stock data"
            type="tickers"
            tickers={[
              {
                symbol: 'AAPL',
                name: 'Apple Inc.',
                price: '$175.43',
                changePercent: '+2.34%',
                changeAmount: '+$4.01',
                isPositive: true,
              },
              {
                symbol: 'MSFT',
                name: 'Microsoft Corp.',
                price: '$378.85',
                changePercent: '+1.87%',
                changeAmount: '+$6.95',
                isPositive: true,
              },
              {
                symbol: 'TSLA',
                name: 'Tesla Inc.',
                price: '$248.42',
                changePercent: '-0.92%',
                changeAmount: '-$2.31',
                isPositive: false,
              },
            ]}
          />
          <InfoDetailCard
            title="Recent Transactions"
            subtitle="Last 5 transactions"
            type="positions"
            transactions={[
              {
                date: 'Dec 15',
                investment: 'Apple Inc.',
                type: 'buy',
                amount: '$5,250',
              },
              {
                date: 'Dec 12',
                investment: 'Microsoft Corp.',
                type: 'sell',
                amount: '$3,800',
              },
              {
                date: 'Dec 10',
                investment: 'Tesla Inc.',
                type: 'buy',
                amount: '$7,450',
              },
              {
                date: 'Dec 08',
                investment: 'S&P 500 ETF',
                type: 'buy',
                amount: '$2,100',
              },
              {
                date: 'Dec 05',
                investment: 'Amazon.com',
                type: 'sell',
                amount: '$4,320',
              },
            ]}
          />
          <InfoDetailCard
            title="Messages"
            subtitle="Recent communications"
            type="messages"
            unreadCount={5}
            messages={[
              {
                sender: 'Michael Chen',
                time: '2h ago',
                title: 'Q4 Portfolio Review',
                preview: 'Your quarterly review is ready for discussion...',
              },
              {
                sender: 'Lisa Rodriguez',
                time: '1d ago',
                title: 'Dividend Payment Processed',
                preview: 'Your quarterly dividend of $2,847.50 has been...',
              },
              {
                sender: 'System Alert',
                time: '2d ago',
                title: 'Market Volatility Alert',
                preview: 'Increased volatility detected in tech sector...',
              },
            ]}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  scrollView: { flex: 1 },
  content: { padding: 16 },
  welcomeSection: {
    marginBottom: 24,
  },
  welcomeText: {
    ...theme.fonts.bold,
    fontSize: theme.fontSize.xl,
    color: theme.colors.text,
    marginBottom: theme.spacing(1),
  },
  welcomeSubtext: {
    ...theme.fonts.regular,
    fontSize: theme.fontSize.base,
    color: theme.colors.textHint,
  },
  cardsContainer: {
    gap: 25,
    marginBottom: 16,
  },
  detailCardsContainer: {
    gap: 25,
  },
});

export default DashboardScreen;
