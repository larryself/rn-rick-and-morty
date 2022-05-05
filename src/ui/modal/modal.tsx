import React, { FC, ReactNode } from 'react';
import { KeyboardAvoidingView } from 'react-native';
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
  const closeModal = () => setShowModal(false)

  return (
    <StyledModal
      isVisible={showModal}
      onSwipeComplete={closeModal}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      swipeDirection={['down']}
      useNativeDriverForBackdrop
      statusBarTranslucent
      backdropOpacity={0.1}
      useNativeDriver
      hideModalContentWhileAnimating>
      <KeyboardAvoidingView behavior={'position'} enabled>
        <Container>
          {children}
        </Container>
      </KeyboardAvoidingView>
    </StyledModal>
  )
};
