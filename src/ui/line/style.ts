import { View } from 'react-native';
import { COLORS } from 'src/theme/colors';
import styled from 'styled-components/native';

export const Block = styled(View)`
  width: 100%;
  opacity: 0.2;
  background: ${COLORS.BLACK};
  height: 0.5px;
`;
