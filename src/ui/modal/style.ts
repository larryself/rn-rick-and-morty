import Modal from 'react-native-modal';
import styled from 'styled-components/native';

import { COLORS } from 'src/theme/colors';

export const StyledModal = styled(Modal)`
  margin: 0;
  justify-content: flex-end;
  height: 100px;
`;

export const Container = styled.View`
  overflow: hidden;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${COLORS.WHITE};
`;
