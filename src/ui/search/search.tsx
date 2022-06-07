import React, { FC, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Arrow } from 'assets/images/icons/arrow';

import {
  ButtonBack,
  HeaderDetailed,
  Line,
  ModalMenu,
  SearchInput,
} from 'src/ui';

import {
  Box,
  Circle,
  CircleChecked,
  Container,
  Guide,
  Inner,
  Title,
} from './style';

interface SearchProps {
  title: string;
  guide: string;
  selected: string;
  onSelect: (item: string) => void;
  list?: string[];
  value: string;
  setValue: (item: string) => void;
}

export const Search: FC<SearchProps> = ({
  title = '',
  guide = '',
  selected = '',
  onSelect,
  list,
  setValue,
  value = '',
}) => {
  const [visible, setVisible] = useState(false);
  const renderItem = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={{ padding: 10 }}
      onPress={() => {
        onSelect(item);
      }}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <Line />
      <Container onPress={() => setVisible(true)}>
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
      <ModalMenu setShowModal={setVisible} showModal={visible}>
        <HeaderDetailed title={title} left={<ButtonBack />} />
        <SearchInput value={value} setValue={setValue} />
        <Box>
          <FlatList
            data={list}
            numColumns={1}
            renderItem={renderItem}
            keyExtractor={(item) => item}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
          />
        </Box>
      </ModalMenu>
    </>
  );
};
