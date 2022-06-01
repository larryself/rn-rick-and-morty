import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { COLORS } from 'src/theme/colors';

export const ButtonContainer = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  background-color: ${COLORS.INDIGO};
  padding: 5px 12px;
  border-radius: 14px;
`;

export const Title = styled(Text)`
  font-weight: 900;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.08px;
  text-transform: uppercase;
  color: ${COLORS.WHITE};
`;
