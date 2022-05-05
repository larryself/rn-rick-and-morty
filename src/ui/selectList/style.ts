import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

import { COLORS } from 'src/theme/colors';

export const Inner = styled(View)`
  margin: 10px 0 40px;
  flex-direction: column;
`;

export const Line = styled(View)`
  width: 100%;
  opacity: 0.2;
  background: #000000;
  height: 0.5px;
`;

export const Title = styled(Text)`
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.24px;
  color: rgba(0, 0, 0, 0.4);
  padding: 8px 16px;
`;

export const SelectItem = styled(TouchableOpacity)`
  padding: 11px 0;
`;

export const SelectText = styled(Text)`
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: ${COLORS.BLACK};
`;
