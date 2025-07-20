# mini-client-portal

A React Native client portal application built with Expo, featuring a modern dashboard with financial information cards, secure authentication, and a clean, responsive design.

## Features

- **Dashboard**: Financial information cards showing portfolio value, investments, and return rates
- **Authentication**: Secure login system with form validation
- **Responsive Design**: Clean, modern UI that works across different screen sizes
- **Theme System**: Centralized theming with consistent colors, fonts, and spacing
- **Component Library**: Reusable UI components for buttons, cards, inputs, and more
- **TypeScript**: Full TypeScript support for better development experience

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

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- Yarn package manager
- Expo CLI (`npm install -g @expo/cli`)

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

3. **Start the development server:**
   ```sh
   yarn start
   ```

4. **Run on device/simulator:**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your phone

## Development

### Running Tests
```sh
# Run all tests
yarn test

# Run specific test file
yarn test InfoCard.test.tsx

# Run tests in watch mode
yarn test --watch
```

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

## Technologies Used

- **React Native (Expo)**: Cross-platform mobile development
- **TypeScript**: Static typing and better development experience
- **React Navigation**: App navigation and routing
- **Zustand**: Lightweight state management
- **React Native Paper**: Material Design components
- **Jest & React Native Testing Library**: Testing framework
- **Expo**: Development platform and build tools
- **Yarn**: Package management

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
