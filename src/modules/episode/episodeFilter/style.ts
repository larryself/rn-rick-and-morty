import { View } from 'react-native';
import { COLORS } from 'src/theme/colors';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
  background: ${COLORS.WHITE};
`;

export const Line = styled(View)`
  width: 100%;
  opacity: 0.2;
  background: #000000;
  height: 0.5px;
`;
