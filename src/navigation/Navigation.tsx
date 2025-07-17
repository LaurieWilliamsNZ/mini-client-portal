import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/login';
import DashboardScreen from '../screens/dashboard';


const Stack = createNativeStackNavigator();
export default () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Dashboard" component={DashboardScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
);
