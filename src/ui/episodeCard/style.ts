import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

import { COLORS } from 'src/theme/colors';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  padding-top: 6px;
  padding-bottom: 11px;
  padding-right: 16px;
  display: flex;
`;

export const Inner = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Wrap = styled(View)``;

export const Episode = styled(Text)`
  font-weight: 900;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: ${COLORS.DARK};
`;

export const Name = styled(Text)`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.24px;
  color: ${COLORS.text};
`;

export const Date = styled(Text)`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.07px;
  color: ${COLORS.GRAY_1};
`;
