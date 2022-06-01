import { Dictation } from 'assets/images/icons/dictation';
import { Search } from 'assets/images/icons/search';
import React, { FC } from 'react';
import { COLORS } from 'src/theme/colors';
import { Container, Inner, Input } from './style';
import { Line } from 'src/ui';

interface SearchInputProps {
  value: string | null;
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
            value={value || ''}
            onChange={item => setValue(item.nativeEvent.text)}
          />
          <Dictation />
        </Container>
      </Inner>
      <Line />
    </>
  );
};
