// Mock react-native-gesture-handler
// jest.mock('react-native-gesture-handler/jestSetup', () => {});

// Mock react-native-reanimated
// jest.mock('react-native-reanimated', () => {
//   const Reanimated = require('react-native-reanimated/mock');
//   Reanimated.default.call = () => {};
//   return Reanimated;
// });

// Mock react-native-vector-icons
jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

// Mock react-native-svg
jest.mock('react-native-svg', () => {
  const React = require('react');
  const { View } = require('react-native');
  return {
    Svg: View,
    Path: View,
    Circle: View,
    Rect: View,
    G: View,
    Defs: View,
    LinearGradient: View,
    Stop: View,
  };
});

// Mock expo modules
jest.mock('expo-status-bar', () => ({
  StatusBar: 'StatusBar',
}));

// Mock react-native-safe-area-context
jest.mock('react-native-safe-area-context', () => ({
  SafeAreaProvider: ({ children }) => children,
  useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
}));

// Mock react-native-paper
jest.mock('react-native-paper', () => {
  const React = require('react');
  const { View, Text, TouchableOpacity } = require('react-native');
  
  return {
    Provider: ({ children }) => children,
    TextInput: ({ value, onChangeText, placeholder, ...props }) => 
      React.createElement(View, { testID: "text-input" },
        React.createElement(Text, null, placeholder),
        React.createElement(Text, null, value),
        React.createElement(TouchableOpacity, { onPress: () => onChangeText && onChangeText('test') })
      ),
    Button: ({ onPress, children, ...props }) => 
      React.createElement(TouchableOpacity, { onPress: onPress, testID: "paper-button" },
        React.createElement(Text, null, children)
      ),
  };
});

// Silence the warning: Animated: `useNativeDriver` is not supported
// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Mock console methods to reduce noise in tests
global.console = {
  ...console,
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
}; 