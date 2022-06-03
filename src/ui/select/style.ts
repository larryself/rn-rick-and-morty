import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

import { COLORS } from 'src/theme/colors';

export const Inner = styled(View)`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  background-color: ${COLORS.WHITE};
  width: 100%;
  padding: 8px 16px 10px 19px;
`;

export const Guide = styled(Text)`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.24px;
  color: ${COLORS.text};
`;

export const Title = styled(Text)`
  font-weight: 900;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: ${COLORS.DARK};
`;

export const Circle = styled(View)<{ selected: string }>`
  width: 22px;
  height: 22px;
  border: 1.5px solid;
  border-color: ${props => (props.selected ? COLORS.INDIGO : COLORS.GRAY_4)};
  border-radius: 11px;
  align-items: center;
  justify-content: center;
  margin-right: 13px;
`;

export const CircleChecked = styled(View)<{ selected: string }>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${props => (props.selected ? COLORS.INDIGO : COLORS.WHITE)};
`;
