import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/theme/colors';

export const Arrow = ({ color = COLORS.GRAY_4 }) => (
  <Svg width="6" height="8" fill="none">
    <Path
      d="M5.94 4.12 1.2 7.64l-.34-.42 2.61-3.1L.86.58 1.2.3l4.74 3.82Z"
      fill={color}
    />
  </Svg>
);
