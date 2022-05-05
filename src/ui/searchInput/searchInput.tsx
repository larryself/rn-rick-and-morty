import { Dictation } from 'assets/images/icons/dictation';
import { Search } from 'assets/images/icons/search';
import React from 'react';
import { COLORS } from 'src/theme/colors';
import { Container, Inner, Line, Input } from './style';

export const SearchInput = () => {
  return (
    <>
      <Inner>
        <Container>
          <Search/>
          <Input
            placeholder="Search"
            keyboardType={'default'}
            placeholderTextColor={COLORS.text}
          />
          <Dictation/>

        </Container>

      </Inner>
      <Line/>
  </>
  );
};
