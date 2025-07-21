import {
  DefaultTheme as PaperDefault,
  configureFonts,
} from 'react-native-paper';
import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667;

export const scale = (size: number) =>
  (SCREEN_WIDTH / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (SCREEN_HEIGHT / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
export const normalizeFont = (size: number) =>
  PixelRatio.roundToNearestPixel(moderateScale(size));

const FONT_SIZE_XS = normalizeFont(12);
const FONT_SIZE_SM = normalizeFont(14);
const FONT_SIZE_BASE = normalizeFont(16);
const FONT_SIZE_LG = normalizeFont(20);
const FONT_SIZE_XL = normalizeFont(24);

const COLORS = {
  // Primary colors
  primary: '#0284C7',
  accent: '#EF4D19',

  // Background colors
  background: '#F3F4F6',
  backgroundLight: '#F9FAFB',
  surface: '#FFFFFF',

  // Text colors
  text: '#1F2937',
  textLight: '#6B7280',
  textHint: '#4B5563',
  placeholder: '#ADAEBC',
  label: '#374151',

  // UI colors
  border: '#D1D5DB',
  shadow: '#000',

  // Status colors
  positive: '#16A34A',
  negative: '#EF4444',
  neutral: '#6B7280',

  // Buy/Sell colors
  buyPillBg: '#dcfce7',
  sellPillBg: '#fee2e2',
  buyText: '#166534',
  sellText: '#991b1b',

  // Message colors
  messageSender: '#111827',
  messageTime: '#6b7280',
  messageTitle: '#4b5563',
  messagePreview: '#6b7280',
  messageIndicator: '#ef4444',
  viewAllText: '#0284c7',

  // Header colors
  headerBorder: '#E5E7EB',
  headerLogoBg: '#3B82F6',
  headerBrandText: '#111827',
  headerMessageIcon: '#6B7280',
  headerMessageBadge: '#EF4444',
  headerMessageBadgeText: '#FFFFFF',
  headerAvatarBg: '#3B82F6',
  headerAvatarText: '#FFFFFF',
  headerUserName: '#111827',

  // Legacy colors (for backward compatibility)
  checkboxCheckedBg: '#E0F2FE',
  checkboxBorder: '#D1D5DB',
  tickerPositive: '#16A34A',
  tickerAmount: '#6B7280',
  positiveChange: '#16a34a',
  neutralText: '#6b7280',
  logoDefault: '#FFFFFF',
  unreadPillBg: '#fee2e2',
  unreadText: '#991b1b',
};

const DIMENSIONS = {
  avatar: {
    small: 32,
    medium: 40,
    large: 48,
  },
  button: {
    height: 44,
    borderRadius: 8,
  },
  icon: {
    small: 16,
    medium: 24,
    large: 32,
  },
  modal: {
    padding: 20,
    closeButton: 40,
  },
};

const createFontConfig = (fontSize: number) => ({
  fontFamily: 'Inter-Regular',
  fontWeight: '400' as '400',
  fontSize,
});

const createMediumFontConfig = (fontSize: number) => ({
  fontFamily: 'Inter-Medium',
  fontWeight: '500' as '500',
  fontSize,
});

const createBoldFontConfig = (fontSize: number) => ({
  fontFamily: 'Inter-Bold',
  fontWeight: '700' as '700',
  fontSize,
});

const fontConfig = {
  default: {
    bold: {
      fontFamily: 'Inter-Bold',
      fontWeight: '700' as '700',
      fontSize: FONT_SIZE_XL,
      lineHeight: FONT_SIZE_XL + 8,
      letterSpacing: 0.5,
    },
    regular: {
      fontFamily: 'Inter-Regular',
      fontWeight: '400' as '400',
      fontSize: FONT_SIZE_BASE,
      lineHeight: FONT_SIZE_BASE + 8,
      letterSpacing: 0.5,
    },
    medium: {
      fontFamily: 'Inter-Medium',
      fontWeight: '500' as '500',
      fontSize: FONT_SIZE_LG,
      lineHeight: FONT_SIZE_LG + 8,
      letterSpacing: 0.5,
    },
    light: {
      fontFamily: 'Inter',
      fontWeight: '300' as '300',
      fontSize: FONT_SIZE_SM,
      lineHeight: FONT_SIZE_SM + 8,
      letterSpacing: 0.5,
    },
    thin: {
      fontFamily: 'Inter',
      fontWeight: '100' as '100',
      fontSize: FONT_SIZE_SM,
      lineHeight: FONT_SIZE_SM + 8,
      letterSpacing: 0.5,
    },
  },
};

export const paperTheme = {
  ...PaperDefault,
  roundness: moderateScale(8),
  colors: {
    ...PaperDefault.colors,
    ...COLORS,
  },
  fonts: configureFonts({
    config: fontConfig.default,
    isV3: true,
  }),
};

export const theme = {
  ...paperTheme,
  spacing: (multiplier: number) => moderateScale(multiplier * 8),
  fontSize: {
    sm: FONT_SIZE_SM,
    base: FONT_SIZE_BASE,
    lg: FONT_SIZE_LG,
    xl: FONT_SIZE_XL,
  },
  borderRadius: {
    sm: moderateScale(4),
    base: moderateScale(8),
    lg: moderateScale(12),
  },
  customFonts: {
    tableText: createFontConfig(FONT_SIZE_SM),
    tableTextMedium: createMediumFontConfig(FONT_SIZE_SM),
    messageText: createFontConfig(FONT_SIZE_SM),
    messageTextMedium: createMediumFontConfig(FONT_SIZE_SM),
  },
};

export const dashboardTheme = {
  ...theme,
  spacing: (multiplier: number) => moderateScale(multiplier * 8),
  fontSize: {
    xs: FONT_SIZE_XS,
    sm: FONT_SIZE_SM,
    base: FONT_SIZE_BASE,
    lg: FONT_SIZE_LG,
    xl: FONT_SIZE_XL,
  },
  dimensions: DIMENSIONS,
  customFonts: {
    tableText: createFontConfig(FONT_SIZE_XS),
    tableTextMedium: createMediumFontConfig(FONT_SIZE_XS),
    messageText: createFontConfig(FONT_SIZE_SM),
    messageTextMedium: createMediumFontConfig(FONT_SIZE_SM),
    unreadText: createMediumFontConfig(FONT_SIZE_XS),
    viewAllText: createMediumFontConfig(FONT_SIZE_SM),
    headerBrand: createBoldFontConfig(FONT_SIZE_LG),
    headerMessageBadge: {
      fontFamily: 'Inter-SemiBold',
      fontWeight: '600' as '600',
      fontSize: normalizeFont(10),
    },
    headerAvatar: {
      fontFamily: 'Inter-SemiBold',
      fontWeight: '600' as '600',
      fontSize: FONT_SIZE_XS,
    },
    headerUserName: createFontConfig(FONT_SIZE_BASE),
  },
};
