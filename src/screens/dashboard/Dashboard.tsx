// src/screens/DashboardScreen.tsx
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Text } from 'react-native-paper';
import Card from '../../components/card';
import Button from '../../components/button';


const DashboardScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Card><Text>Total Value: $12,345</Text></Card>
      <Card><Text>Active Investments: 3</Text></Card>
      <Card><Text>Return Rate: 8.2%</Text></Card>
      <Button onPress={() => {/* dummy */}}>View More</Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:'#F3F4F6' },
  content: { padding:16 },
});

export default DashboardScreen;
