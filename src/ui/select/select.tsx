import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { Arrow } from 'assets/images/icons/arrow';

import { Line, ModalMenu, SelectList } from 'src/ui';

import { Circle, CircleChecked, Container, Guide, Inner, Title } from './style';

export interface SelectProps {
  selected: string;
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
        <Circle selected={selected}>
          <CircleChecked selected={selected} />
        </Circle>
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
        <SelectList
          options={types}
          title={title}
          onChangeSelect={typeSelect}
          selected={selected}
        />
      </ModalMenu>
    </>
  );
};
