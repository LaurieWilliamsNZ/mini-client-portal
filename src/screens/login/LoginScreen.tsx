// src/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import Button from '../../components/button';


export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>Sign In</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        label="Password"
        secureTextEntry
        value={pass}
        onChangeText={setPass}
        style={styles.input}
      />
      <Button onPress={() => navigation.replace('Dashboard')}>
        Continue
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16, backgroundColor: '#F3F4F6' },
  title: { textAlign: 'center', marginBottom: 24 },
  input: { marginVertical: 8 },
});

export default LoginScreen;