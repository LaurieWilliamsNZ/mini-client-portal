

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginScreen from '../LoginScreen';

// Mock the theme
jest.mock('@/src/theme', () => ({
  theme: {
    colors: {
      background: '#ffffff',
      surface: '#f8f9fa',
      text: '#000000',
      label: '#6c757d',
      primary: '#007bff',
      placeholder: '#adb5bd',
      border: '#dee2e6',
      shadow: '#000000',
      checkboxBorder: '#ced4da',
      checkboxCheckedBg: '#e3f2fd',
      textLight: '#6c757d',
    },
    spacing: (value: number) => value * 8,
    borderRadius: { lg: 12, base: 8 },
    fontSize: { lg: 20, sm: 14, base: 16 },
    fonts: {
      bold: { fontFamily: 'System', fontWeight: 'bold' },
      medium: { fontFamily: 'System', fontWeight: '500' },
    },
  },
}));

jest.mock('../components/LoginFooter', () => {
  const React = require('react');
  const { View, Text } = require('react-native');
  return function MockLoginFooter() {
    return React.createElement(View, { testID: 'login-footer' }, 'LoginFooter');
  };
});

jest.mock('../components/LoginHeader', () => {
  const React = require('react');
  const { View, Text } = require('react-native');
  return function MockLoginHeader() {
    return React.createElement(View, { testID: 'login-header' }, 'LoginHeader');
  };
});

jest.mock('../components/SecureConnection', () => {
  const React = require('react');
  const { View, Text } = require('react-native');
  return function MockLoginSecureConnection() {
    return React.createElement(View, { testID: 'secure-connection' }, 'SecureConnection');
  };
});

jest.mock('react-native-paper', () => {
  const React = require('react');
  const { View, Text, TouchableOpacity } = require('react-native');
  
  return {
    Provider: ({ children }: { children: any }) => children,
    TextInput: ({ value, onChangeText, placeholder, testID }: { value: any; onChangeText: any; placeholder: any; testID?: any }) => 
      React.createElement(View, { testID: testID || "text-input", placeholder: placeholder, value: value },
        React.createElement(Text, null, placeholder),
        React.createElement(Text, null, value),
        React.createElement(TouchableOpacity, { onPress: () => onChangeText && onChangeText('test') })
      ),
    Button: ({ onPress, children, testID }: { onPress: any; children: any; testID?: any }) => 
      React.createElement(TouchableOpacity, { onPress: onPress, testID: testID || "paper-button" },
        React.createElement(Text, null, children)
      ),
  };
});

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');
jest.mock('react-native-safe-area-context', () => ({
  SafeAreaProvider: ({ children }: { children: any }) => children,
  useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
}));

describe('LoginScreen', () => {
  const renderLoginScreen = () => {
    return render(<LoginScreen />);
  };

  it('renders correctly', () => {
    const { getByText, getByTestId } = renderLoginScreen();

    // Check that main text elements are displayed
    expect(getByText('Welcome Back')).toBeTruthy();
    expect(getByText('Sign In')).toBeTruthy();

    // Check that all child components are rendered
    expect(getByTestId('login-header')).toBeTruthy();
    expect(getByTestId('login-footer')).toBeTruthy();
    expect(getByTestId('secure-connection')).toBeTruthy();
  });

  it('has input fields', () => {
    const { getAllByTestId } = renderLoginScreen();
    const textInputs = getAllByTestId('text-input');
    
    expect(textInputs).toHaveLength(2);
  });

  it('handles button press', () => {
    const { getByText } = renderLoginScreen();
    const signInButton = getByText('Sign In');

    expect(() => {
      fireEvent.press(signInButton);
    }).not.toThrow();
  });
}); 