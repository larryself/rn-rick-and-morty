import React from 'react';
import { FlatList } from 'react-native';
import { useGetEpisodesQuery } from 'src/graphql/generated/graphql';
import { useSelector } from 'src/store/hooks/useSelector';
import { EpisodeCard, Wrapper, Loader, Line } from 'src/ui';

export const EpisodeScreen = () => {
  const { name, season } = useSelector(state => state.episode);
  const { data, loading, fetchMore } = useGetEpisodesQuery();
  const episodes = data?.episodes?.results;
  const limit = data?.episodes?.info?.next;

  if (loading) {
    return <Loader />;
  }
  const loadEpisodes = async () => {
    await fetchMore({
      variables: { page: limit },
    });
  };
  return (
    <Wrapper>
      <FlatList
        data={episodes}
        renderItem={({ item }) => <EpisodeCard {...item} />}
        showsVerticalScrollIndicator={false}
        numColumns={1}
        ItemSeparatorComponent={() => <Line />}
        keyExtractor={item => item.id}
        onEndReached={limit ? loadEpisodes : null}
        onEndReachedThreshold={2}
        contentContainerStyle={{ paddingLeft: 16 }}
      />
    </Wrapper>
  );
};
