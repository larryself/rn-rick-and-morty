import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/theme/colors';

export const Dictation = ({ color = COLORS.GRAY_4 }) => (
  <Svg width="20" height="20" fill="none">
    <Path
      fillRule="evenodd"
      clip-rule="evenodd"
      d="M10 1.36c1.66 0 3 1.22 3 2.73v6.36c0 1.51-1.34 2.73-3 2.73s-3-1.22-3-2.73V4.1c0-1.5 1.34-2.73 3-2.73Zm5.25 5.91c-.41 0-.75.3-.75.68v2.5c0 2.26-2.01 4.1-4.5 4.1s-4.5-1.84-4.5-4.1v-2.5c0-.37-.34-.68-.75-.68s-.75.3-.75.68v2.5c0 2.75 2.25 5.07 5.25 5.41v1.41h-2c-.41 0-.75.3-.75.68 0 .38.34.69.75.69h5.5c.41 0 .75-.3.75-.69 0-.37-.34-.68-.75-.68h-2v-1.4c3-.35 5.25-2.67 5.25-5.42v-2.5c0-.37-.34-.68-.75-.68Z"
      fill={color}
    />
  </Svg>
);
