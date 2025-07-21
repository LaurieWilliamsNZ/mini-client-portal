# mini-client-portal

A React Native client portal application built with Expo, featuring a modern dashboard with financial information cards, secure authentication, and a clean, responsive design.

## Features

- **Dashboard**: Financial information cards showing portfolio value, investments, and return rates
- **Multiple Content Types**: Market watch tickers, transaction tables, and message lists
- **Authentication**: Secure login system with form validation
- **Responsive Design**: Clean, modern UI that works across different screen sizes
- **Theme System**: Centralized theming with consistent colors, fonts, and spacing
- **Component Library**: Reusable UI components for buttons, cards, inputs, and more
- **TypeScript**: Full TypeScript support for better development experience
- **Testing**: Comprehensive Jest tests for all components

## Project Structure

```
mini-client-portal/
├── App.tsx                  # Main entry point for the React Native app
├── app.json                 # Expo app configuration
├── assets/                  # App icons, images, and SVG assets
│   ├── logo.svg            # App logo
│   ├── wallet.svg          # Wallet icon for dashboard
│   ├── investment.svg      # Investment icon for dashboard
│   ├── return.svg          # Return rate icon for dashboard
│   └── upArrow.svg         # Up arrow icon for positive changes
├── index.ts                 # Entry point for Expo
├── package.json             # Project metadata and dependencies
├── tsconfig.json            # TypeScript configuration
├── yarn.lock                # Yarn lockfile for dependency management
└── src/
    ├── components/          # Reusable UI components
    │   ├── button/          # Button components (primary, animated)
    │   ├── card/            # Card component
    │   ├── checkbox/        # Checkbox input component
    │   ├── logo/            # Logo component
    │   ├── passwordInputField/ # Password input component
    │   └── textInputField/  # Text input component
    ├── hooks/               # Custom React hooks
    │   └── useAuth.ts       # Authentication hook
    ├── navigation/          # App navigation setup
    ├── screens/             # App screens
    │   ├── dashboard/       # Dashboard screen with InfoCard components
    │   │   └── components/
    │   │       └── infoCard/ # InfoCard component for financial data
    │   └── login/           # Login screen
    ├── store/               # State management
    │   └── authStore.ts     # Authentication state store
    ├── theme.ts             # Centralized theme configuration
    ├── types/               # TypeScript type definitions
    └── validation/          # Form validation utilities
```

## Key Components

### Header Component

Located at `src/components/Header/`, this component provides the main navigation header with:

- **Brand identity**: WealthWise logo with upward trending line graph
- **Message notifications**: Email icon with unread message badge
- **User profile**: Avatar image and user name display
- **Theme integration**: Uses dashboard theme for consistent styling
- **Interactive elements**: Touchable message and profile buttons
- **Responsive design**: Adapts to different screen sizes

### InfoDetailCard Component

Located at `src/screens/dashboard/components/InfoDetailCard/`, this component displays financial information with:

- **Multiple content types**: Tickers (market watch), positions (transactions), and messages
- **Dynamic content**: Title, subtitle, and various data types
- **Icon support**: Custom icons for different card types
- **Theme-based styling**: Consistent colors, fonts, and spacing
- **Responsive design**: Adapts to different screen sizes
- **Test coverage**: Comprehensive Jest tests with 16 test cases

### InfoCard Component

Located at `src/screens/dashboard/components/infoCard/`, this component displays financial information with:

- **Dynamic content**: Title, value, and change text
- **Icon support**: Wallet, investment, or return icons
- **Text styling**: Theme-based or standard text styles
- **Responsive design**: Adapts to different screen sizes
- **Test coverage**: Comprehensive Jest tests

### Theme System

The app uses a centralized theme system (`src/theme.ts`) with:

- **Color palette**: Primary, secondary, and semantic colors
- **Typography**: Font families, sizes, and weights
- **Spacing**: Consistent spacing and border radius values
- **Responsive scaling**: Automatic scaling for different screen sizes
- **Dashboard theme**: Separate theme with specific colors and fonts for dashboard components

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- Yarn package manager
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/LaurieWilliamsNZ/mini-client-portal.git
   cd mini-client-portal
   ```

2. **Install dependencies:**

   ```sh
   yarn install
   ```

3. **Environment Configuration:**

   Create a `.env` file in the root directory with the following variables:

   ```env
   POLYGON_API_KEY=your_polygon_api_key_here
   MESSAGING_API_URL=your_messaging_api_endpoint
   MESSAGING_API_KEY=your_messaging_api_key
   ```

4. **Start the development server:**

   ```sh
   yarn start
   ```

5. **Run on device/simulator:**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your phone

### Development Workflow

- **Hot reloading**: Changes reflect immediately in the app
- **TypeScript checking**: Automatic type checking during development
- **ESLint**: Code quality enforcement
- **Prettier**: Automatic code formatting

## Architecture & Approach

### Design Philosophy

The application follows a **component-driven architecture** with emphasis on:

- **Reusability**: Modular components that can be used across different screens
- **Maintainability**: Clear separation of concerns and consistent patterns
- **Scalability**: Easy to extend with new features and components
- **Performance**: Optimized rendering and efficient state management

### Technical Stack

- **Frontend**: React Native with Expo for cross-platform development
- **State Management**: Zustand for lightweight, scalable state management
- **Styling**: Custom theme system with consistent design tokens
- **Type Safety**: TypeScript for better development experience
- **Testing**: Jest and React Native Testing Library for comprehensive testing

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header/         # Main navigation header
│   ├── button/         # Button components
│   ├── card/           # Card components
│   └── ...
├── screens/            # App screens and views
│   ├── dashboard/      # Dashboard with financial data
│   └── login/          # Authentication screen
├── hooks/              # Custom React hooks
├── store/              # State management (Zustand)
├── theme.ts            # Centralized theming system
├── types/              # TypeScript type definitions
└── validation/         # Form validation utilities
```

### State Management

- **Zustand**: Lightweight state management for authentication and user data
- **Local State**: Component-level state for UI interactions
- **API State**: Centralized API calls with proper error handling

## Development

### Running Tests

```sh
# Run all tests
yarn test

# Run specific test file
yarn test InfoDetailCard.test.tsx

# Run tests in watch mode
yarn test --watch
```

**Test Coverage:**

- InfoDetailCard: 16 test cases covering all content types (tickers, positions, messages)
- Tests avoid hardcoded values and focus on component structure
- Mock data used for dynamic content testing

### Code Structure

- **Components**: Located in `src/components/` for reusable UI elements
- **Screens**: Located in `src/screens/` for main app views
- **Navigation**: Configured in `src/navigation/`
- **State Management**: Uses Zustand for authentication state
- **Styling**: Theme-based styling with consistent design tokens

### Adding New Components

1. Create component in appropriate directory
2. Add TypeScript interfaces for props
3. Use theme system for styling
4. Add Jest tests in `__tests__/` directory
5. Export from index file

## API Integrations

### Polygon API Implementation

The application integrates with **Polygon.io API** for real-time financial data:

#### **Features**

- **Real-time stock data**: Live ticker information and price updates
- **Market watch**: Current prices, change percentages, and volume data
- **Historical data**: Price history for trend analysis
- **Company information**: Basic company details and metadata

#### **Implementation Details**

- **API Key**: Required for authentication (set in `.env` file)
- **Rate limiting**: Respects Polygon's API rate limits
- **Error handling**: Graceful fallbacks for API failures
- **Caching**: Local storage for offline data access
- **Real-time updates**: WebSocket connections for live data

#### **Data Structure**

```typescript
interface StockTicker {
  symbol: string;
  name: string;
  price: string;
  changePercent: string;
  changeAmount: string;
  isPositive: boolean;
}
```

#### **Usage Example**

```typescript
// Fetch real-time stock data
const tickers = await fetchPolygonData(['AAPL', 'GOOGL', 'MSFT']);
```

### Messaging API Integration

The application includes a comprehensive messaging system:

#### **Features**

- **Real-time messaging**: Instant message delivery and notifications
- **Message history**: Persistent storage of conversation history
- **Unread indicators**: Badge notifications for new messages
- **User avatars**: Profile pictures for message senders
- **Message threading**: Organized conversation structure

#### **Implementation Details**

- **WebSocket connection**: Real-time bidirectional communication
- **Message persistence**: Local database for offline access
- **Push notifications**: Native push notifications for new messages
- **File attachments**: Support for images and documents
- **Message status**: Read receipts and delivery confirmations

#### **Data Structure**

```typescript
interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
  isRead: boolean;
  avatar?: string;
}
```

#### **API Endpoints**

- `GET /messages` - Fetch message history
- `POST /messages` - Send new message
- `PUT /messages/:id/read` - Mark message as read
- `WS /messages` - WebSocket for real-time updates

## Technologies Used

- **React Native (Expo)**: Cross-platform mobile development
- **TypeScript**: Static typing and better development experience
- **React Navigation**: App navigation and routing
- **Zustand**: Lightweight state management
- **React Native Paper**: Material Design components
- **Jest & React Native Testing Library**: Testing framework
- **Expo**: Development platform and build tools
- **Yarn**: Package management
- **Polygon.io API**: Real-time financial data
- **WebSocket**: Real-time messaging communication

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
