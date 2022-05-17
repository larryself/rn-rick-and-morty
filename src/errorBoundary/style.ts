import { SafeAreaView, View, TouchableOpacity, Text } from 'react-native';
import { COLORS } from 'src/theme/colors';
import styled from 'styled-components/native';

export const Inner = styled(SafeAreaView)`
  flex: 1;
`;

export const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.WHITE};
`;

export const Title = styled(Text)`
  font-weight: 900;
  font-size: 17px;
  line-height: 22px;
  color: ${COLORS.DARK};
`;

export const Button = styled(TouchableOpacity)`
  padding: 20px 15px;
`;

export const ButtonText = styled(Text)`
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  color: ${COLORS.INDIGO};
`;
