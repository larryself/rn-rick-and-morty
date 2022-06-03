import React, { FC, ReactNode } from 'react';
import {
  BgImg,
  Container,
  FirstInfo,
  Img,
  Inner,
  LatterInfo,
  SubTitle,
  Title,
} from './style';

export type DetailContainerProps = {
  img?: string;
  firstInfo?: string;
  latterInfo?: string;
  title?: string;
  subTitle?: string;
  children?: ReactNode;
};

export const DetailContainer: FC<DetailContainerProps> = ({
  img,
  firstInfo = '',
  latterInfo = '',
  title = '',
  children,
  subTitle,
}) => {
  return (
    <Inner>
      <Container>
        {img && (
          <>
            <BgImg
              source={require('assets/images/bg.png')}
              resizeMode={'cover'}
            />
            <Img source={{ uri: img }} />
          </>
        )}
        <FirstInfo>{firstInfo}</FirstInfo>
        <Title>{title}</Title>
        <LatterInfo>{latterInfo}</LatterInfo>
      </Container>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
      {children}
    </Inner>
  );
};
