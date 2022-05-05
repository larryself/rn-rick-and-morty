import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

import { COLORS } from 'src/theme/colors';

export const Container = styled(View)`
  flex-direction: column;
  padding: 10px 16px;
`;

export const Title = styled(Text)`
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  letter-spacing: 0.41px;
  color: ${COLORS.BLACK};
`;

export const Button = styled(TouchableOpacity)`
  width: 50%;
  padding: 11px 0;
  align-self: flex-end;
`;

export const ButtonText = styled(Text)`
  font-weight: 900;
  font-size: 17px;
  line-height: 22px;
  text-align: right;
  letter-spacing: -0.41px;
  color: ${COLORS.INDIGO};
`;
