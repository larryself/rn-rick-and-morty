import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

import { COLORS } from 'src/theme/colors';

export const Container = styled(View)`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  height: 44px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: ${COLORS.WHITE};
`;

export const Title = styled(Text)`
  font-weight: 900;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.24px;
  color: ${COLORS.BLACK};
  flex: 1;
  text-align: center;
`;

export const ButtonInner = styled(View)`
  min-width: 65px;
`;
