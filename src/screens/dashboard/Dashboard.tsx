// src/screens/DashboardScreen.tsx
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Text } from 'react-native-paper';
import Card from '@/src/components/card';
import Button from '@/src/components/button/primaryButton';
import { theme } from '@/src/theme';
import { useAuthStore } from '@/src/store/authStore';

const DashboardScreen = () => {
  const { user, logout } = useAuthStore();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome, {user?.name || user?.email}!</Text>
        <Button onPress={logout}>Logout</Button>
      </View>
      
      <Card>
        <Text>Total Value: $12,345</Text>
      </Card>
      <Card>
        <Text>Active Investments: 3</Text>
      </Card>
      <Card>
        <Text>Return Rate: 8.2%</Text>
      </Card>
      <Button
        onPress={() => {
          /* dummy */
        }}
      >
        View More
      </Button>
    </ScrollView>
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
