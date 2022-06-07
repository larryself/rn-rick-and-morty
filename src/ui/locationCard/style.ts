import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { COLORS } from 'src/theme/colors';

export const Container = styled(TouchableOpacity)<{ width: number }>`
  width: ${(props) => props.width && props.width * 0.46 + 'px'};
  height: 80px;
  margin: ${(props) => props.width && props.width * 0.02 + 'px'};
  border: 1px solid ${COLORS.GRAY_5};
  border-radius: 8px;
  padding: 12px;
`;

export const Type = styled(Text)`
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.07px;
  color: ${COLORS.GRAY_3};
`;

export const Name = styled(Text)`
  font-weight: 900;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: ${COLORS.DARK};
`;
