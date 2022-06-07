import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/theme/colors';

export const ArrowBack = ({ color = COLORS.INDIGO }) => (
  <Svg width="13" height="21" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.04 20.58.79 11.45a.97.97 0 0 1 0-1.4L10.04.92a1.46 1.46 0 0 1 2.04 0c.56.55.56 1.46 0 2.01l-7.91 7.82 7.9 7.82c.57.55.57 1.46 0 2.01-.56.56-1.47.56-2.03 0Z"
      fill={color}
    />
  </Svg>
);
