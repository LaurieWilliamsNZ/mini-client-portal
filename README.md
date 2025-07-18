# Mini Client Portal

A modern React Native client portal application built with Expo, featuring secure authentication, responsive design, and a clean component architecture.

## 🚀 Features

- **Secure Authentication** - Login screen with form validation
- **Responsive Design** - Built with React Native and NativeWind for Tailwind CSS support
- **SVG Support** - Configured for importing and using SVG assets
- **Code Formatting** - Prettier integration with format-on-save
- **TypeScript** - Full type safety throughout the application
- **Modern UI Components** - Reusable components with consistent theming

## 📁 Project Structure

```
mini-client-portal/
├── App.tsx                          # Main application entry point
├── app.json                         # Expo configuration
├── assets/                          # Static assets (icons, images, SVGs)
│   ├── logo.svg                     # Application logo
│   ├── shield.svg                   # Security icon
│   └── *.png                        # App icons and splash screens
├── src/
│   ├── components/                  # Reusable UI components
│   │   ├── button/                  # Button component
│   │   ├── card/                    # Card component
│   │   ├── logo/                    # Logo component
│   │   ├── passwordInputField/      # Password input component
│   │   └── textInputField/          # Text input component
│   ├── navigation/                  # Navigation configuration
│   ├── screens/                     # Application screens
│   │   ├── dashboard/               # Dashboard screen
│   │   └── login/                   # Login screen and components
│   ├── theme.ts                     # Centralized theme configuration
│   └── types/                       # TypeScript type definitions
├── .prettierrc                      # Prettier configuration
├── .prettierignore                  # Files to ignore during formatting
├── metro.config.js                  # Metro bundler configuration
├── tsconfig.json                    # TypeScript configuration
└── package.json                     # Dependencies and scripts
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- Yarn package manager
- Expo CLI (`npm install -g @expo/cli`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/LaurieWilliamsNZ/mini-client-portal.git
   cd mini-client-portal
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   ```

3. **Start the development server:**
   ```bash
   yarn start
   ```

4. **Run on specific platforms:**
   ```bash
   yarn ios      # iOS simulator
   yarn android  # Android emulator
   ```

## 🎨 Development Features

### Code Formatting
This project uses Prettier for consistent code formatting:

- **Format all files:** `yarn format`
- **Check formatting:** `yarn format:check`
- **Auto-format on save:** Configured in VS Code settings

### SVG Support
SVG files can be imported directly as React components:

```typescript
import LogoSvg from '@/assets/logo.svg';
import ShieldIcon from '@/assets/shield.svg';
```

### Path Aliases
Use `@/` prefix for cleaner imports:

- `@/assets/*` - Access to assets directory
- `@/src/*` - Access to source directory
- `@/*` - Access to project root

## 🏗️ Architecture

### Component Structure
- **Atomic Design** - Components are organized by complexity and reusability
- **Props Interface** - All components use TypeScript interfaces for props
- **Consistent Styling** - Uses centralized theme configuration

### Navigation
- **Stack Navigation** - Handles screen transitions
- **Type-safe Routes** - Navigation with TypeScript support

### State Management
- **React Hooks** - Local state management
- **Form Handling** - React Hook Form for form validation

## 🎯 Available Scripts

```bash
yarn start          # Start Expo development server
yarn ios            # Run on iOS simulator
yarn android        # Run on Android emulator
yarn format         # Format all files with Prettier
yarn format:check   # Check if files are properly formatted
```

## 🛡️ Technologies Used

- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and tools
- **TypeScript** - Type-safe JavaScript
- **React Navigation** - Navigation library
- **NativeWind** - Tailwind CSS for React Native
- **React Hook Form** - Form handling and validation
- **Prettier** - Code formatting
- **React Native SVG** - SVG support with transformer

## 🔧 Configuration Files

- **`.prettierrc`** - Prettier formatting rules
- **`metro.config.js`** - Metro bundler with SVG transformer
- **`tsconfig.json`** - TypeScript with path aliases
- **`src/theme.ts`** - Centralized theme configuration

## 📱 Platform Support

- ✅ iOS
- ✅ Android

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the 0BSD License - see the LICENSE file for details.
