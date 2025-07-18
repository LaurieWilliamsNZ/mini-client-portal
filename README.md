# mini-client-portal

## Project Description

mini-client-portal is a simple client portal application designed to help users manage their accounts, view dashboards, and securely log in. The project is structured for easy extension and customization.

## Project Structure

```
mini-client-portal/
├── App.tsx                  # Main entry point for the React Native app
├── app.json                 # Expo app configuration
├── assets/                  # App icons, images, and other static assets
├── index.ts                 # Entry point for Expo
├── package.json             # Project metadata and dependencies
├── tsconfig.json            # TypeScript configuration
├── yarn.lock                # Yarn lockfile for dependency management
└── src/
    ├── components/          # Reusable UI components
    │   ├── button/          # Button component and index
    │   └── card/            # Card component and index
    ├── navigation/          # App navigation setup
    ├── screens/             # App screens (dashboard, login, etc.)
    ├── theme.ts             # Centralized theme configuration
    └── mini-client-portal.code-workspace # VSCode workspace settings
```

- The `src/components/` directory contains modular UI components for reuse.
- The `src/screens/` directory contains screen components for different app views.
- The `src/navigation/` directory manages navigation logic and configuration.
- The `src/theme.ts` file centralizes color and style definitions for consistent theming.

## Setup Instructions

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

## Usage Instructions

- After starting the development server, open your browser and navigate to the local address provided in the terminal (usually http://localhost:19006 for Expo projects).
- Log in with your credentials or use the demo account if available.
- Navigate through the dashboard and other screens using the app navigation.

## Technologies Used

- **React Native (with Expo):** For building cross-platform mobile applications using JavaScript and React.
- **TypeScript:** Provides static typing to JavaScript, improving code quality and maintainability.
- **React Navigation:** Handles navigation and routing within the app, supporting stack, tab, and drawer navigation patterns.
- **Yarn:** Dependency management and project scripts.
- **Expo CLI:** Simplifies development, building, and testing of React Native apps.
- **Custom Theming:** Centralized theme management for consistent styling across the app (`src/theme.ts`).
- **Component-based Architecture:** Reusable UI components organized in `src/components/` for maintainability and scalability.
