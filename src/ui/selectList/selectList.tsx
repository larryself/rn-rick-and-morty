import React, { FC } from 'react';
import { FlatList } from 'react-native';

import { Line } from 'src/ui';

import { Inner, SelectItem, SelectText as Text, Title } from './style';

export interface SelectListProps {
  title: string;
  options: string[];
  selected: string;
  onChangeSelect: (item: string) => void;
}

export const SelectList: FC<SelectListProps> = ({
  title,
  options,
  selected,
  onChangeSelect,
}) => {
  const renderItem = ({ item }: { item: string }) => (
    <SelectItem
      onPress={() => onChangeSelect(item)}
      selected={selected === item}>
      <Text>{item}</Text>
    </SelectItem>
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
