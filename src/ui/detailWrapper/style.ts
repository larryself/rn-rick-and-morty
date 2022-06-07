import { Image, ScrollView, Text, View } from 'react-native';
import styled from 'styled-components/native';

import { COLORS } from 'src/theme/colors';

export const Inner = styled(ScrollView)`
  flex: 1;
  background-color: ${COLORS.WHITE};
`;

export const Container = styled(View)`
  background-color: ${COLORS.GRAY_6};
  justify-content: center;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 20px;
`;

export const BgImg = styled(Image)`
  width: 100%;
  height: 84px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Img = styled(Image)`
  width: 130px;
  height: 130px;
  border-radius: 65px;
  border-width: 5px;
  border-color: ${COLORS.GRAY_6};
  margin-bottom: 20px;
`;

export const Title = styled(Text)`
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.337647px;
  text-align: center;
`;

export const FirstInfo = styled(Text)`
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.07px;
  color: ${COLORS.GRAY_3};
`;

export const LatterInfo = styled(Text)`
  font-weight: 900;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.08px;
  color: ${COLORS.GRAY_3};
  text-transform: uppercase;
`;

export const SubTitle = styled(Text)`
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.38px;
  color: ${COLORS.GRAY_1};
  padding: 20px 16px 10px;
`;
