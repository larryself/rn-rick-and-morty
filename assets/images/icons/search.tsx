import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/theme/colors';

export const Search = ({ color = COLORS.GRAY_4 }) => (
  <Svg width="14" height="14" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.74 12.57 9.91 8.74A5.53 5.53 0 0 0 5.46 0 5.44 5.44 0 0 0 0 5.47a5.53 5.53 0 0 0 5.5 5.5 5.4 5.4 0 0 0 3.24-1.06l3.84 3.83a.83.83 0 1 0 1.16-1.17ZM5.5 9.87a4.43 4.43 0 0 1-3.13-7.5 4.35 4.35 0 0 1 3.1-1.27 4.43 4.43 0 0 1 3.12 7.5 4.35 4.35 0 0 1-3.1 1.28Z"
      fill={color}
    />
  </Svg>
);
