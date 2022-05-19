import React from 'react';
import { FlatList } from 'react-native';
import { useGetEpisodesQuery } from 'src/graphql/generated/graphql';
import { useSelector } from 'src/store/hooks/useSelector';
import { EpisodeCard, Wrapper, Loader, Line } from 'src/ui';

export const EpisodeScreen = () => {
  const { name, episode } = useSelector(state => state.episode);
  const { data, loading, fetchMore } = useGetEpisodesQuery({
    variables: { name, episode, page: 1 },
  });
  const episodes = data?.episodes?.results;
  const limit = data?.episodes?.info?.next;

  const loadEpisodes = async () => {
    await fetchMore({
      variables: { page: limit },
    });
  };
  console.log(episode);
  if (loading) {
    return <Loader />;
  }
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
