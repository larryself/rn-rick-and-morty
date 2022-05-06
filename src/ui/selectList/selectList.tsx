import React, { FC } from 'react';
import { FlatList } from 'react-native';

import { Inner, Line, SelectItem, SelectText as Text, Title } from './style';

export interface SelectListProps {
  title: string;
  options: string[];
  onChangeSelect: (item: string) => void;
}

export const SelectList: FC<SelectListProps> = ({
  title,
  options,
  onChangeSelect,
}) => {
  const renderItem = ({ item }: { item: string }) => (
    <SelectItem onPress={() => onChangeSelect(item)}>
      <Text>{item}</Text>
    </SelectItem>
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
