import React, { FC } from 'react';
import { FlatList } from 'react-native';

import {
  Container,
  Circle,
  CircleChecked,
  Inner,
  Line,
  TextInner,
  Title,
  Type,
} from './style';

export interface RadioProps {
  options: string[];
  title: string;
  selected: string | null;
  onChangeSelect: (item: string) => void;
}

export const Radio: FC<RadioProps> = ({
  options,
  title,
  onChangeSelect,
  selected,
}) => {
  const renderItem = ({ item }: { item: string }) => (
    <Container
      onPress={() => {
        onChangeSelect(item);
      }}>
      <Circle selected={selected === item}>
        <CircleChecked selected={selected === item} />
      </Circle>
      <TextInner>
        <Type>{item}</Type>
      </TextInner>
    </Container>
  );

  return (
    <Inner>
      <Title>{title}</Title>
      <Line />
      <FlatList
        data={options}
        renderItem={renderItem}
        numColumns={1}
        keyExtractor={item => item}
        ItemSeparatorComponent={() => <Line />}
        contentContainerStyle={{ paddingLeft: 18 }}
      />
      <Line />
    </Inner>
  );
};
