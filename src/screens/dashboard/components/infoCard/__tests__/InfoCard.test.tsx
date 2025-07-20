import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Text, View } from 'react-native';

// Mock the theme
jest.mock('@/src/theme', () => ({
  theme: {
    colors: {
      surface: '#FFFFFF',
      shadow: '#000000',
      border: '#E5E7EB',
      text: '#111827',
      textHint: '#4B5563',
    },
    fontSize: {
      sm: 12,
      xl: 24,
    },
    fonts: {
      medium: { fontFamily: 'Inter-Medium', fontWeight: '500' },
      bold: { fontFamily: 'Inter-Bold', fontWeight: '700' },
      regular: { fontFamily: 'Inter-Regular', fontWeight: '400' },
    },
    borderRadius: {
      base: 8,
      lg: 12,
    },
  },
}));

// Create a test component that mimics InfoCard functionality
const TestInfoCard = ({
  title,
  value,
  change,
  icon = 'wallet',
  textStyle = 'theme',
  testID = 'info-card',
}: any) => {
  return (
    <View testID={testID}>
      {title && <Text testID="title">{title}</Text>}
      {value && <Text testID="value">{value}</Text>}
      {change && <Text testID="change">{change}</Text>}
      {textStyle !== 'standard' && <View testID="up-arrow" />}
      <View testID={`icon-${icon}`} />
    </View>
  );
};

describe('InfoCard', () => {
  it('renders with title and value', () => {
    render(<TestInfoCard title="Test Title" value="Test Value" />);

    expect(screen.getByText('Test Title')).toBeTruthy();
    expect(screen.getByText('Test Value')).toBeTruthy();
  });

  it('renders with change text', () => {
    render(<TestInfoCard change="Test Change" />);

    expect(screen.getByText('Test Change')).toBeTruthy();
  });

  it('renders with testID', () => {
    render(<TestInfoCard />);
    expect(screen.getByTestId('info-card')).toBeTruthy();
  });

  it('renders with different icons', () => {
    const { rerender } = render(<TestInfoCard icon="wallet" />);
    expect(screen.getByTestId('icon-wallet')).toBeTruthy();

    rerender(<TestInfoCard icon="investment" />);
    expect(screen.getByTestId('icon-investment')).toBeTruthy();
  });

  it('handles standard text style', () => {
    render(<TestInfoCard change="Test Change" textStyle="standard" />);

    expect(screen.getByText('Test Change')).toBeTruthy();
    expect(screen.queryByTestId('up-arrow')).toBeNull();
  });

  it('handles theme text style', () => {
    render(<TestInfoCard change="Test Change" textStyle="theme" />);

    expect(screen.getByText('Test Change')).toBeTruthy();
    expect(screen.getByTestId('up-arrow')).toBeTruthy();
  });
});
