import { Arrow } from 'assets/images/icons/arrow';
import React, { useState } from 'react';
import { FlatList, Modal, Text, TextInput, View } from 'react-native';
import { useCharactersQuery } from 'src/modules/graphql/characters';
import { ButtonBack } from 'src/ui/buttonBack/buttonBack';
import { HeaderFilter } from 'src/ui/headerFilter/headerFilter';
import { ModalMenu } from 'src/ui/modal/modal';
import { SearchInput } from 'src/ui/searchInput/searchInput';
import { Container, Curcle, CurcleChecked, Guide, Inner, Line, Title, Input } from './style';

export const Search = ({ title = '', guide = '', selected = '', list=[] }) => {
  const [visible, setVisible] = useState(false);
  const {data} = useCharactersQuery()
  const typeSelect = (item: string) => {
    setVisible((state) => !state);
  };
  console.log(list)
  const renderItem = ({ item }: {item: string})=>{
    console.log(item)
    return (
      <View>
        <Text>{item}</Text>
      </View>
    )
  }
  return (
    <>
      <Line/>
      <Container onPress={() => setVisible(true)
      }>
        <Curcle selected={selected}>
          <CurcleChecked selected={selected}/>
        </Curcle>
        <Inner>
          <View>
            <Title>{title}</Title>
            <Guide>{guide}</Guide>
          </View>
          <Arrow/>
        </Inner>
      </Container>
      <Line/>
      <ModalMenu setShowModal={setVisible} showModal={visible}>
        <View style={{ marginVertical: 40 }}>
          <HeaderFilter title={'Name'} left={<ButtonBack/>}/>
          <SearchInput/>
          <FlatList
            data={list}
            numColumns={1}
            renderItem={renderItem}
            keyExtractor={(item) => item}
            />
        </View>
      </ModalMenu>
    </>
  );
};
