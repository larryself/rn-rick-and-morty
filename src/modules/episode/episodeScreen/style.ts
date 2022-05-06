import { View } from 'react-native';
import { COLORS } from 'src/theme/colors';
import styled from 'styled-components';

export const Line = styled(View)`
  width: 100%;
  opacity: 0.2;
  background: ${COLORS.DARK};
  height: 0.5px;
`;
