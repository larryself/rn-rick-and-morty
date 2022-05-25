import { Arrow } from 'assets/images/icons/arrow';
import React, { FC, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Line, HeaderFilter, ButtonBack, ModalMenu, SearchInput } from 'src/ui';
import {
  Container,
  Curcle,
  CurcleChecked,
  Guide,
  Inner,
  Title,
  Box,
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
  value,
}) => {
  const [visible, setVisible] = useState(false);
  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={{ padding: 10 }}
      onPress={() => {
        setVisible(false);
        onSelect(item);
      }}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <Line />
      <Container onPress={() => setVisible(true)}>
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
      <ModalMenu setShowModal={setVisible} showModal={visible}>
        <View>
          <HeaderFilter title={title} left={<ButtonBack />} />
          <SearchInput value={value} setValue={setValue} />
          <Box>
            <FlatList
              data={list}
              numColumns={1}
              renderItem={renderItem}
              keyExtractor={item => item}
            />
          </Box>
        </View>
      </ModalMenu>
    </>
  );
};
