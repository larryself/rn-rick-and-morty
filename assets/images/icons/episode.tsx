import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLORS } from 'src/theme/colors';


export const Episode = ({focused, color = COLORS.GRAY , colorInFocus = COLORS.INDIGO}: any) => (
  <Svg width="28" height="28" fill="none">
    {!focused ?
      <>
        <Path
          d="M23.33 8.17H4.67a2.33 2.33 0 0 0-2.34 2.33v12.83a2.33 2.33 0 0 0 2.34 2.34h18.66a2.33 2.33 0 0 0 2.34-2.34V10.5a2.33 2.33 0 0 0-2.34-2.33Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M19.83 2.33 14 8.17 8.17 2.33"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
      :
      <>
        <Path
          d="M23.33 8.17H4.67a2.33 2.33 0 0 0-2.34 2.33v12.83a2.33 2.33 0 0 0 2.34 2.34h18.66a2.33 2.33 0 0 0 2.34-2.34V10.5a2.33 2.33 0 0 0-2.34-2.33Z"
          fill={colorInFocus}
        />
        <Path
          d="M19.83 2.33 14 8.17 8.17 2.33"
          stroke={colorInFocus}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    }
  </Svg>
);
