// src/screens/DashboardScreen.tsx
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Text } from 'react-native-paper';
import Button from '@/src/components/button/primaryButton';
import { theme } from '@/src/theme';
import { useAuthStore } from '@/src/store/authStore';
import InfoCard from './components/infoCard/InfoCard';
import { SafeAreaView } from 'react-native-safe-area-context';

const DashboardScreen = () => {
  const { user, logout } = useAuthStore();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Text style={styles.welcomeText}>
            Welcome, {user?.name || user?.email}!
          </Text>
          <Button onPress={logout}>Logout</Button>
        </View>

        <InfoCard
          title="Total Portfolio Value"
          value="$127,450"
          icon="wallet"
          change="+2.4% from last month"
        />
        <InfoCard
          title="Active Investments"
          value="6"
          icon="investment"
          change="Across 4 sectors"
          textStyle="standard"
        />
        <InfoCard
          title="Recent Return Rate"
          value="8.4%"
          icon="return"
          change="Above market average"
        />
        <Button
          onPress={() => {
            /* dummy */
          }}
        >
          View More
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  content: { padding: 16 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DashboardScreen;
