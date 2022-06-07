import React, { FC } from 'react';
import { Dictation } from 'assets/images/icons/dictation';
import { Search } from 'assets/images/icons/search';

import { COLORS } from 'src/theme/colors';
import { Line } from 'src/ui';

import { Container, Inner, Input } from './style';

interface SearchInputProps {
  value: string;
  setValue: (value: string) => void;
}

export const SearchInput: FC<SearchInputProps> = ({ value, setValue }) => {
  return (
    <>
      <Inner>
        <Container>
          <Search />
          <Input
            placeholder="Search"
            keyboardType={'default'}
            placeholderTextColor={COLORS.text}
            value={value}
            onChange={(item) => setValue(item.nativeEvent.text)}
          />
          <Dictation />
        </Container>
      </Inner>
      <Line />
    </>
  );
};
