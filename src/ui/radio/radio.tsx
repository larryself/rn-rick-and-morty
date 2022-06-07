import React, { FC } from 'react';
import { FlatList } from 'react-native';

import { Line } from 'src/ui';

import {
  Circle,
  CircleChecked,
  Container,
  Inner,
  TextInner,
  Title,
  Type,
} from './style';

export interface RadioProps {
  options: string[];
  title: string;
  selected: string;
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

  const itemSeparator = () => {
    return <Line />;
  };

  return (
    <Inner>
      <Title>{title}</Title>
      <Line />
      <FlatList
        data={options}
        renderItem={renderItem}
        numColumns={1}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={itemSeparator}
        contentContainerStyle={{ paddingLeft: 18 }}
      />
      <Line />
    </Inner>
  );
};
