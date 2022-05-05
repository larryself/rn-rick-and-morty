import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { COLORS } from 'src/theme/colors';

export const Button = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`;
export const Title = styled(Text)`
  margin-left: 6px;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: ${COLORS.INDIGO};
`;
