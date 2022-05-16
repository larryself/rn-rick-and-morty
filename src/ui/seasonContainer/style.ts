import { SafeAreaView, Text, View } from 'react-native';
import styled from 'styled-components/native';

import { COLORS } from 'src/theme/colors';

export const Container = styled(SafeAreaView)`
  align-items: center;
`;

export const Wrap = styled(View)`
  width: 100%;
  background-color: ${COLORS.WHITE};
`;

export const Season = styled(Text)`
  padding: 10px 16px;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.38px;
  color: ${COLORS.GRAY_1};
`;

export const Inner = styled(View)`
  padding-left: 16px;
`;
