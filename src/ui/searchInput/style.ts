import { TextInput, View } from 'react-native';
import styled from 'styled-components/native';

import { COLORS } from 'src/theme/colors';

export const Container = styled(View)`
  padding: 5px 10px;
  background-color: ${COLORS.GRAY_5};
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
`;
export const Inner = styled(View)`
  padding: 6px 10px;
`;

export const Input = styled(TextInput)`
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  margin: 0 7px;
  flex: 1;
`;
