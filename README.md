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

The application uses Zustand for state management with separate stores for:

- **Authentication Store** (`src/store/authStore.ts`): Manages user authentication state, login/logout, and user profile data
- **Messages Store** (`src/store/messagesStore.ts`): Handles message fetching, marking as read, and unread count management

### API Integration

The app integrates with a mock API server (Mockoon) for:

- **Authentication**: Login endpoint with JWT token response
- **Messages**: Fetch messages, mark as read, and get unread count
- **Dashboard Data**: Financial information and portfolio data

### Environment Configuration

API endpoints are configured via environment variables:

- **API Base URL**: `API_PATH` environment variable
- **Configuration File**: `src/config/env.ts` centralizes all API endpoints
- **Endpoints**:
  - **Login**: `${API_PATH}/auth/login`
  - **Messages**: `${API_PATH}/messages`
  - **Mark as Read**: `${API_PATH}/messages/:id/read`

### Configuration

Environment variables are loaded from `src/config/env.ts` and used throughout the application in:

- `src/store/authStore.ts` - Authentication API calls
- `src/store/messagesStore.ts` - Messages API calls

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

## Environment Variables

The application uses environment variables for API configuration. You can set these by creating a `.env` file in the `src` directory:

```bash
# API Configuration
API_PATH=http://localhost:3001
```

### Available Environment Variables

- `API_PATH`: The base URL for the API server (defaults to `http://localhost:3001`)

### API Endpoints

The application automatically constructs API endpoints based on the `API_PATH`:

- **Authentication**: `${API_PATH}/auth/login`
- **Messages**: `${API_PATH}/messages`
- **Message Details**: `${API_PATH}/messages/:id`
- **Mark as Read**: `${API_PATH}/messages/:id/read`

### Configuration

Environment variables are loaded from `src/config/env.ts` and used throughout the application in:

- `src/store/authStore.ts` - Authentication API calls
- `src/store/messagesStore.ts` - Messages API calls

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Yarn or npm
- Mockoon (for API mocking)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd mini-client-portal
```

2. Install dependencies:

```bash
yarn install
# or
npm install
```

3. Set up environment variables:
   Create a `.env` file in the `src` directory:

```bash
API_PATH=http://localhost:3001
```

### Mockoon Setup

1. **Install Mockoon** (if not already installed):
   - Download from [mockoon.com](https://mockoon.com)
   - Or install via CLI: `npm install -g @mockoon/cli`

2. **Import Mockoon Configuration**:
   - Open Mockoon
   - Import the configuration file: `mockoon/MiniClientDashboard.json`
   - Or run via CLI: `mockoon-cli start --data mockoon/MiniClientDashboard.json`

3. **Start Mockoon Server**:
   - The server will start on `http://localhost:3001`
   - This provides the mock API endpoints for the application

### Login Credentials

Use these credentials to log into the application:

- **Email**: `user@example.com`
- **Password**: `password123`

### Running the Application

1. **Start the development server**:

```bash
yarn start
# or
npm start
```

2. **Run on specific platform**:

```bash
# iOS
yarn ios
# or
npm run ios

# Android
yarn android
# or
npm run android

# Web
yarn web
# or
npm run web
```

### Testing

Run the test suite:

```bash
yarn test
# or
npm test
```

Run tests in watch mode:

```bash
yarn test:watch
# or
npm run test:watch
```

## TODO

### High Priority

- [ ] **State Persistence**: Implement token storage and persistence for authentication state
  - Store JWT token securely using AsyncStorage or SecureStore
  - Auto-refresh tokens before expiration
  - Use stored token for all authenticated API calls
  - Implement automatic logout on token expiration

### Authentication & Security

- [ ] **Enhanced Authentication**: Add refresh token mechanism and secure token storage
- [ ] **Password Reset**: Implement forgot password functionality
- [ ] **Biometric Authentication**: Add fingerprint/face ID support for mobile
- [ ] **Session Management**: Handle multiple device sessions and logout from all devices
- [ ] **Input Validation**: Add client-side validation for all forms

### User Experience

- [ ] **Offline Support**: Cache data and work offline with sync when connection restored
- [ ] **Push Notifications**: Implement push notifications for new messages and alerts
- [ ] **Loading States**: Add skeleton screens and better loading indicators
- [ ] **Error Handling**: Implement comprehensive error boundaries and user-friendly error messages
- [ ] **Accessibility**: Add screen reader support and accessibility features

### Dashboard & Data

- [ ] **Real-time Updates**: Implement WebSocket connections for live data updates
- [ ] **Data Visualization**: Add charts and graphs for financial data
- [ ] **Export Functionality**: Allow users to export data as PDF/CSV
- [ ] **Search & Filter**: Add search functionality for messages and transactions
- [ ] **Pagination**: Implement infinite scroll or pagination for large datasets

### Performance & Optimization

- [ ] **Image Optimization**: Optimize and lazy load images
- [ ] **Bundle Optimization**: Reduce app bundle size
- [ ] **Memory Management**: Optimize component re-renders and memory usage
- [ ] **Caching Strategy**: Implement intelligent caching for API responses

### Testing & Quality

- [ ] **E2E Testing**: Add end-to-end tests with Detox or similar
- [ ] **Performance Testing**: Add performance monitoring and testing
- [ ] **Security Testing**: Implement security testing for authentication flows
- [ ] **Accessibility Testing**: Add automated accessibility testing

### Infrastructure & Deployment

- [ ] **CI/CD Pipeline**: Set up automated testing and deployment
- [ ] **Environment Management**: Add staging and production environment configurations
- [ ] **Monitoring**: Add crash reporting and analytics
- [ ] **Backup Strategy**: Implement data backup and recovery procedures

### Features

- [ ] **Profile Management**: Allow users to update profile information
- [ ] **Settings Page**: Add app settings and preferences
- [ ] **Dark Mode**: Implement dark/light theme toggle
- [ ] **Multi-language Support**: Add internationalization (i18n)
- [ ] **File Upload**: Add support for document uploads and attachments
