import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { COLORS } from 'src/theme/colors';

export const Inner = styled(View)`
  padding: 11px 0;
  background-color: ${COLORS.WHITE};
`;

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(Text)`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.24px;
  color: ${COLORS.GRAY_4};
  padding: 8px 16px;
`;

export const Circle = styled(View)<{ selected: boolean }>`
  width: 22px;
  height: 22px;
  border-width: 1.5px;
  border-color: ${props => (props.selected ? COLORS.INDIGO : COLORS.GRAY_4)};
  border-radius: 11px;
  align-items: center;
  justify-content: center;
  margin-right: 13px;
`;

export const CircleChecked = styled(View)<{ selected: boolean }>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${props => (props.selected ? COLORS.INDIGO : COLORS.WHITE)};
`;

export const TextInner = styled(View)`
  width: 100%;
`;

export const Type = styled(Text)`
  padding: 11px 0;
  color: ${COLORS.DARK};
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
`;
