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

const FONT_SIZE_SM = normalizeFont(12);
const FONT_SIZE_BASE = normalizeFont(16);
const FONT_SIZE_LG = normalizeFont(20);
const FONT_SIZE_XL = normalizeFont(24);

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
    primary: '#0284C7',
    accent: '#EF4D19',
    background: '#F3F4F6',
    backgroundLight: '#F9FAFB',
    surface: '#FFFFFF',
    text: '#1F2937',
    placeholder: '#ADAEBC',
    textHint: '#4B5563',
    textLight: '#6B7280',
    label: '#374151',
    border: '#D1D5DB',
    checkboxCheckedBg: '#E0F2FE',
    checkboxBorder: '#D1D5DB',
    shadow: '#000',
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
    tableText: {
      fontFamily: 'Inter-Regular',
      fontWeight: '400' as '400',
      fontSize: FONT_SIZE_SM,
    },
    tableTextMedium: {
      fontFamily: 'Inter-Medium',
      fontWeight: '500' as '500',
      fontSize: FONT_SIZE_SM,
    },
    messageText: {
      fontFamily: 'Inter-Regular',
      fontWeight: '400' as '400',
      fontSize: FONT_SIZE_SM,
    },
    messageTextMedium: {
      fontFamily: 'Inter-Medium',
      fontWeight: '500' as '500',
      fontSize: FONT_SIZE_SM,
    },
  },
};

// Dashboard-specific theme with custom font sizes
export const dashboardTheme = {
  ...theme,
  fontSize: {
    xs: normalizeFont(12),
    sm: normalizeFont(14),
    base: normalizeFont(16),
    lg: normalizeFont(20),
    xl: normalizeFont(24),
  },
  colors: {
    ...theme.colors,
    // Buy/Sell pill colors
    buyPillBg: '#dcfce7',
    sellPillBg: '#fee2e2',
    buyText: '#166534',
    sellText: '#991b1b',
    // Unread pill colors
    unreadPillBg: '#fee2e2',
    unreadText: '#991b1b',
    // Message colors
    messageSender: '#111827',
    messageTime: '#6b7280',
    messageTitle: '#4b5563',
    messagePreview: '#6b7280',
    messageIndicator: '#ef4444',
    viewAllText: '#0284c7',
    // Ticker colors
    tickerPositive: '#16A34A',
    tickerAmount: '#6B7280',
  },
  customFonts: {
    tableText: {
      fontFamily: 'Inter-Regular',
      fontWeight: '400' as '400',
      fontSize: normalizeFont(12),
    },
    tableTextMedium: {
      fontFamily: 'Inter-Medium',
      fontWeight: '500' as '500',
      fontSize: normalizeFont(12),
    },
    messageText: {
      fontFamily: 'Inter-Regular',
      fontWeight: '400' as '400',
      fontSize: normalizeFont(14),
    },
    messageTextMedium: {
      fontFamily: 'Inter-Medium',
      fontWeight: '500' as '500',
      fontSize: normalizeFont(14),
    },
    unreadText: {
      fontFamily: 'Inter-Medium',
      fontWeight: '500' as '500',
      fontSize: normalizeFont(12),
    },
    viewAllText: {
      fontFamily: 'Inter-Medium',
      fontWeight: '500' as '500',
      fontSize: normalizeFont(14),
    },
  },
};
