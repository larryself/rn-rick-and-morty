import React, { FC, ReactNode } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { StyledModal, Container } from './style';

interface IModalMenu {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  children: ReactNode;
}

export const ModalMenu: FC<IModalMenu> = ({
  showModal,
  setShowModal,
  children,
}) => {
  const closeModal = () => setShowModal(false);

  return (
    <StyledModal
      isVisible={showModal}
      onSwipeComplete={closeModal}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      useNativeDriverForBackdrop
      statusBarTranslucent
      backdropOpacity={0.1}
      useNativeDriver
      hideModalContentWhileAnimating
      avoidKeyboard
      swipeDirection={'down'}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'height' : 'position'}>
        <Container>{children}</Container>
      </KeyboardAvoidingView>
    </StyledModal>
  );
};
