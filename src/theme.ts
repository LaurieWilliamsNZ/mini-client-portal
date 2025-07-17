import { DefaultTheme as PaperDefault, configureFonts } from 'react-native-paper';

const fontConfig = {
  default: {
    regular:  { fontFamily: 'Inter', fontWeight: '400' },
    medium:   { fontFamily: 'Inter', fontWeight: '500' },
    light:    { fontFamily: 'Inter', fontWeight: '300' },
    thin:     { fontFamily: 'Inter', fontWeight: '100' },
  },
};

export const paperTheme = {
  ...PaperDefault,
  roundness: 8,
  colors: {
    ...PaperDefault.colors,
    primary:   '#0284C7',
    accent:    '#EF4D19',
    background:'#F3F4F6',
    surface:   '#FFFFFF',
    text:      '#1F2937',
    placeholder:'#9CA3AF',
  },
  fonts: configureFonts(fontConfig),
};
