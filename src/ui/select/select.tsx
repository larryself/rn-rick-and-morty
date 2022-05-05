import React, { FC, useState } from 'react';
import { Modal, SafeAreaView, View } from 'react-native';
import { Arrow } from 'assets/images/icons/arrow';
import { ModalMenu } from 'src/ui/modal/modal';

import { SelectList } from '../selectList/selectList';
import {
  Container,
  Curcle,
  CurcleChecked,
  Guide,
  Inner,
  Line,
  Title,
} from './style';

export interface SelectProps {
  selected: string | null;
  title: string;
  guide: string;
  types: string[];
  onSelect: (item: string) => void;
}

export const Select: FC<SelectProps> = ({
  selected,
  title,
  guide,
  onSelect,
  types,
}) => {
  const [visible, setVisible] = useState(false);

  const typeSelect = (item: string) => {
    onSelect(item);
    setVisible((state) => !state);
  };

  return (
    <>
      <Line />
      <Container onPress={() => setVisible((state) => !state)}>
        <Curcle selected={selected}>
          <CurcleChecked selected={selected} />
        </Curcle>
        <Inner>
          <View>
            <Title>{title}</Title>
            <Guide>{guide}</Guide>
          </View>
          <Arrow />
        </Inner>
      </Container>
      <Line />
      <ModalMenu showModal={visible} setShowModal={setVisible}>
        <SelectList options={types} title={title} onChangeSelect={typeSelect} />
      </ModalMenu>
    </>
  );
};
