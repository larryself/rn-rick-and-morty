import { View } from 'react-native';
import styled from 'styled-components/native';

import { COLORS } from 'src/theme/colors';

export const Container = styled(View)`
  flex: 1;
  background-color: ${COLORS.WHITE};
  align-items: center;
  justify-content: center;
`;
