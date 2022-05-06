import { View } from 'react-native';
import styled from 'styled-components/native';
import { COLORS } from 'src/theme/colors';

export const Container = styled(View)`
  flex: 1;
  background: ${COLORS.WHITE};
`;

export const Line = styled(View)`
  width: 100%;
  opacity: 0.2;
  background: ${COLORS.BLACK};
  height: 0.5px;
`;
