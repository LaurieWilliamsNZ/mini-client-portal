import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';
import InfoDetailCard from '../InfoDetailCard';

// Mock the theme import
jest.mock('@/src/theme', () => ({
  dashboardTheme: {
    colors: {
      surface: '#ffffff',
      text: '#000000',
      textHint: '#666666',
      border: '#e5e5e5',
      backgroundLight: '#f5f5f5',
      primary: '#007AFF',
      accent: '#FF3B30',
      textLight: '#999999',
      unreadPillBg: '#fee2e2',
      unreadText: '#991b1b',
      buyPillBg: '#dcfce7',
      sellPillBg: '#fee2e2',
      buyText: '#166534',
      sellText: '#991b1b',
      messageSender: '#111827',
      messageTime: '#6b7280',
      messageTitle: '#4b5563',
      messagePreview: '#6b7280',
      messageIndicator: '#ef4444',
      viewAllText: '#0284c7',
      tickerPositive: '#16A34A',
      tickerAmount: '#6B7280',
    },
    fonts: {
      medium: { fontWeight: '500' },
      regular: { fontWeight: '400' },
      bold: { fontWeight: '700' },
    },
    fontSize: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 20,
      xl: 24,
    },
    spacing: (value: number) => value * 4,
    borderRadius: {
      base: 6,
      lg: 12,
    },
    customFonts: {
      tableText: { fontSize: 12, fontFamily: 'Inter-Regular' },
      tableTextMedium: { fontSize: 12, fontFamily: 'Inter-Medium' },
      messageText: { fontSize: 14, fontFamily: 'Inter-Regular' },
      messageTextMedium: { fontSize: 14, fontFamily: 'Inter-Medium' },
      unreadText: { fontSize: 12, fontFamily: 'Inter-Medium' },
      viewAllText: { fontSize: 14, fontFamily: 'Inter-Medium' },
    },
  },
}));

describe('InfoDetailCard', () => {
  const mockTickers = [
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: '$150.00',
      changePercent: '+2.5%',
      changeAmount: '+$3.75',
      isPositive: true,
    },
    {
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      price: '$2800.00',
      changePercent: '-1.2%',
      changeAmount: '-$34.00',
      isPositive: false,
    },
  ];

  const mockTransactions = [
    {
      date: '2024-01-15',
      investment: 'Apple Inc.',
      type: 'buy' as const,
      amount: '$1,500.00',
    },
    {
      date: '2024-01-14',
      investment: 'Tesla Inc.',
      type: 'sell' as const,
      amount: '$2,000.00',
    },
  ];

  const mockMessages = [
    {
      sender: 'John Doe',
      time: '2 hours ago',
      title: 'Portfolio Update',
      preview: 'Your portfolio has been updated with the latest transactions.',
    },
    {
      sender: 'Jane Smith',
      time: '1 day ago',
      title: 'Market Alert',
      preview: 'Important market update for your investments.',
    },
  ];

  describe('Basic Rendering', () => {
    it('renders with title and subtitle', () => {
      render(
        <InfoDetailCard
          title="Test Title"
          subtitle="Test Subtitle"
          type="tickers"
          tickers={mockTickers}
        />
      );

      expect(screen.getByTestId('detail-card-title')).toBeTruthy();
      expect(screen.getByTestId('detail-card-subtitle')).toBeTruthy();
    });

    it('renders with unread count pill', () => {
      render(
        <InfoDetailCard
          title="Test Title"
          unreadCount={5}
          type="messages"
          messages={mockMessages}
        />
      );

      expect(screen.getByTestId('detail-card-unread')).toBeTruthy();
    });

    it('renders without unread count when count is 0', () => {
      render(
        <InfoDetailCard
          title="Test Title"
          unreadCount={0}
          type="messages"
          messages={mockMessages}
        />
      );

      expect(screen.queryByTestId('detail-card-unread')).toBeNull();
    });

    it('renders without unread count when count is undefined', () => {
      render(
        <InfoDetailCard
          title="Test Title"
          type="messages"
          messages={mockMessages}
        />
      );

      expect(screen.queryByTestId('detail-card-unread')).toBeNull();
    });
  });

  describe('Tickers Content Type', () => {
    it('renders tickers content correctly', () => {
      render(
        <InfoDetailCard
          title="Market Watch"
          type="tickers"
          tickers={mockTickers}
        />
      );

      // Check that ticker symbols are rendered
      expect(screen.getByText('AAPL')).toBeTruthy();
      expect(screen.getByText('GOOGL')).toBeTruthy();

      // Check that ticker names are rendered
      expect(screen.getByText('Apple Inc.')).toBeTruthy();
      expect(screen.getByText('Alphabet Inc.')).toBeTruthy();

      // Check that prices are rendered
      expect(screen.getByText('$150.00')).toBeTruthy();
      expect(screen.getByText('$2800.00')).toBeTruthy();

      // Check that change percentages are rendered
      expect(screen.getByText('+2.5%')).toBeTruthy();
      expect(screen.getByText('-1.2%')).toBeTruthy();

      // Check that change amounts are rendered
      expect(screen.getByText('+$3.75')).toBeTruthy();
      expect(screen.getByText('-$34.00')).toBeTruthy();
    });

    it('renders empty tickers container when no tickers provided', () => {
      render(<InfoDetailCard title="Market Watch" type="tickers" />);

      // Should still render the card structure
      expect(screen.getByTestId('info-detail-card')).toBeTruthy();
      expect(screen.getByTestId('detail-card-title')).toBeTruthy();
    });
  });

  describe('Positions Content Type', () => {
    it('renders table headers correctly', () => {
      render(
        <InfoDetailCard
          title="Recent Transactions"
          type="positions"
          transactions={mockTransactions}
        />
      );

      // Check table headers (these are hardcoded as requested)
      expect(screen.getByText('Date')).toBeTruthy();
      expect(screen.getByText('Investment')).toBeTruthy();
      expect(screen.getByText('Type')).toBeTruthy();
      expect(screen.getByText('Amount')).toBeTruthy();
    });

    it('renders transaction data correctly', () => {
      render(
        <InfoDetailCard
          title="Recent Transactions"
          type="positions"
          transactions={mockTransactions}
        />
      );

      // Check transaction dates
      expect(screen.getByText('2024-01-15')).toBeTruthy();
      expect(screen.getByText('2024-01-14')).toBeTruthy();

      // Check investment names
      expect(screen.getByText('Apple Inc.')).toBeTruthy();
      expect(screen.getByText('Tesla Inc.')).toBeTruthy();

      // Check transaction types
      expect(screen.getByText('Buy')).toBeTruthy();
      expect(screen.getByText('Sell')).toBeTruthy();

      // Check amounts
      expect(screen.getByText('$1,500.00')).toBeTruthy();
      expect(screen.getByText('$2,000.00')).toBeTruthy();
    });

    it('renders empty table when no transactions provided', () => {
      render(<InfoDetailCard title="Recent Transactions" type="positions" />);

      // Should still render the card structure and headers
      expect(screen.getByTestId('info-detail-card')).toBeTruthy();
      expect(screen.getByTestId('detail-card-title')).toBeTruthy();
      expect(screen.getByText('Date')).toBeTruthy();
      expect(screen.getByText('Investment')).toBeTruthy();
      expect(screen.getByText('Type')).toBeTruthy();
      expect(screen.getByText('Amount')).toBeTruthy();
    });
  });

  describe('Messages Content Type', () => {
    it('renders messages content correctly', () => {
      render(
        <InfoDetailCard
          title="Messages"
          type="messages"
          messages={mockMessages}
        />
      );

      // Check message senders
      expect(screen.getByText('John Doe')).toBeTruthy();
      expect(screen.getByText('Jane Smith')).toBeTruthy();

      // Check message times
      expect(screen.getByText('2 hours ago')).toBeTruthy();
      expect(screen.getByText('1 day ago')).toBeTruthy();

      // Check message titles
      expect(screen.getByText('Portfolio Update')).toBeTruthy();
      expect(screen.getByText('Market Alert')).toBeTruthy();

      // Check message previews
      expect(
        screen.getByText(
          'Your portfolio has been updated with the latest transactions.'
        )
      ).toBeTruthy();
      expect(
        screen.getByText('Important market update for your investments.')
      ).toBeTruthy();

      // Check "View All Messages" button
      expect(screen.getByText('View All Messages')).toBeTruthy();
    });

    it('renders empty messages container when no messages provided', () => {
      render(<InfoDetailCard title="Messages" type="messages" />);

      // Should still render the card structure and "View All Messages" button
      expect(screen.getByTestId('info-detail-card')).toBeTruthy();
      expect(screen.getByTestId('detail-card-title')).toBeTruthy();
      expect(screen.getByText('View All Messages')).toBeTruthy();
    });
  });

  describe('Default Content Type', () => {
    it('defaults to tickers type when no type specified', () => {
      render(<InfoDetailCard title="Default Card" tickers={mockTickers} />);

      // Should render tickers content
      expect(screen.getByText('AAPL')).toBeTruthy();
      expect(screen.getByText('GOOGL')).toBeTruthy();
    });
  });

  describe('Test ID', () => {
    it('uses default test ID when not provided', () => {
      render(
        <InfoDetailCard
          title="Test Card"
          type="tickers"
          tickers={mockTickers}
        />
      );

      expect(screen.getByTestId('info-detail-card')).toBeTruthy();
    });

    it('uses custom test ID when provided', () => {
      render(
        <InfoDetailCard
          title="Test Card"
          type="tickers"
          tickers={mockTickers}
          testID="custom-test-id"
        />
      );

      expect(screen.getByTestId('custom-test-id')).toBeTruthy();
    });
  });

  describe('Icon Support', () => {
    it('renders icon when provided', () => {
      const mockIcon = <Text testID="mock-icon">Icon</Text>;

      render(
        <InfoDetailCard
          title="Test Card"
          icon={mockIcon}
          type="tickers"
          tickers={mockTickers}
        />
      );

      expect(screen.getByTestId('mock-icon')).toBeTruthy();
    });
  });

  describe('Props Interface', () => {
    it('accepts value and change props without error', () => {
      render(
        <InfoDetailCard
          title="Test Card"
          value="$1,000"
          change="+5.2%"
          changeType="positive"
          type="tickers"
          tickers={mockTickers}
        />
      );

      // Component should render without error even if value/change aren't displayed
      expect(screen.getByTestId('info-detail-card')).toBeTruthy();
      expect(screen.getByTestId('detail-card-title')).toBeTruthy();
    });
  });
});
