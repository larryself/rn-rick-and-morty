import { View } from 'react-native';
import { COLORS } from 'src/theme/colors';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
  background-color: ${COLORS.WHITE};
  align-items: center;
  justify-content: center;
`;
