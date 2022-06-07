import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

import { COLORS } from 'src/theme/colors';

export const Inner = styled(View)`
  margin: 10px 0 40px;
  flex-direction: column;
`;

export const Title = styled(Text)`
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.24px;
  color: ${COLORS.GRAY_2};
  padding: 8px 16px;
`;

export const SelectItem = styled(TouchableOpacity)<{ selected: boolean }>`
  padding: 11px 0;
  ${(props) => props.selected && 'opacity: .2'};
`;

export const SelectText = styled(Text)`
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: ${COLORS.DARK};
`;
