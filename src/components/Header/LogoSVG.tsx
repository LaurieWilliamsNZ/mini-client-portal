import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { dashboardTheme as theme } from '@/src/theme';

interface LogoSVGProps {
  width?: number;
  height?: number;
  color?: string;
}

const LogoSVG: React.FC<LogoSVGProps> = ({
  width = 16,
  height = 16,
  color = theme.colors.logoDefault,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        d="M2 12L5 9L8 10L14 4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default LogoSVG;
