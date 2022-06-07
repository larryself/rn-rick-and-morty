import { SafeAreaView, View } from 'react-native';
import styled from 'styled-components/native';

import { COLORS } from 'src/theme/colors';

export const Container = styled(SafeAreaView)`
  align-items: center;
`;

export const Inner = styled(View)`
  width: 100%;
  height: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
  background-color: ${COLORS.WHITE};
`;
