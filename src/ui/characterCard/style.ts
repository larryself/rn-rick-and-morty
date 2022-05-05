import { Image, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

import { COLORS } from 'src/theme/colors';

export const Container = styled(TouchableOpacity)<{ width: number }>`
  width: ${(props) => props.width && props.width * 0.46 + 'px'};
  margin: ${(props) => props.width && props.width * 0.02 + 'px'};
  border: 1px solid ${COLORS.GRAY_5};
  border-radius: 8px;
  overflow: hidden;
`;

export const Img = styled(Image)`
  width: 100%;
  height: 140px;
`;

export const Description = styled(View)`
  height: 79px;
  padding: 12px;
`;

export const Status = styled(Text)`
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.07px;
  color: ${COLORS.text};
`;

export const Name = styled(Text)`
  font-weight: 900;
  font-size: 17px;
  line-height: 22px;
`;
