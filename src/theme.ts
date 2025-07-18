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

const fontConfig = {
  default: {
    regular: { fontFamily: 'Inter', fontWeight: '400' },
    medium: { fontFamily: 'Inter', fontWeight: '500' },
    light: { fontFamily: 'Inter', fontWeight: '300' },
    thin: { fontFamily: 'Inter', fontWeight: '100' },
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
    surface: '#FFFFFF',
    text: '#1F2937',
    placeholder: '#9CA3AF',
    textHint: '#4B5563',
    textLight: '#6B7280',
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
    sm: normalizeFont(12),
    base: normalizeFont(16),
    lg: normalizeFont(20),
    xl: normalizeFont(24),
  },
  borderRadius: {
    sm: moderateScale(4),
    base: moderateScale(8),
    lg: moderateScale(12),
  },
};
