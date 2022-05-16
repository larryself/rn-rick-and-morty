import { Arrow } from 'assets/images/icons/arrow';
import React, { FC, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { ButtonBack } from 'src/ui/buttonBack/buttonBack';
import { HeaderFilter } from 'src/ui/headerFilter/headerFilter';
import { ModalMenu } from 'src/ui/modal/modal';
import { SearchInput } from 'src/ui/searchInput/searchInput';
import { Line } from 'src/ui';
import { Container, Curcle, CurcleChecked, Guide, Inner, Title } from './style';

interface SearchProps {
  title: string;
  guide: string;
  selected: string;
  select: (item: string) => void;
  list?: [];
  value: string;
  setValue: (item: string) => void;
}
export const Search: FC<SearchProps> = ({
  title = '',
  guide = '',
  selected = '',
  select,
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
        select(item.name);
      }}>
      <Text style={{}}>{item.name}</Text>
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
          <HeaderFilter title={'Name'} left={<ButtonBack />} />
          <SearchInput value={value} setValue={setValue} />
          <FlatList
            data={list}
            numColumns={1}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={{ height: 200 }}
          />
        </View>
      </ModalMenu>
    </>
  );
};
