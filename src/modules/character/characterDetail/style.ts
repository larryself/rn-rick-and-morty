import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

import { COLORS } from 'src/theme/colors';

export const Container = styled(View)`
  padding-top: 9px;
  padding-left: 11px;
`;

export const Title = styled(Text)`
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.38px;
  color: ${COLORS.GRAY_1};
  padding: 20px 16px 10px;
`;

export const SubTitle = styled(Text)`
  font-weight: 900;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: ${COLORS.DARK};
`;
export const Info = styled(Text)`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.24px;
  color: ${COLORS.text};
  margin-bottom: 11px;
`;

export const Location = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
`;

export const Wrap = styled(View)`
  padding-left: 16px;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;
