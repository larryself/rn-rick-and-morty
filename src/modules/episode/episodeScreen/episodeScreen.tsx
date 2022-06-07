import React from 'react';
import { FlatList } from 'react-native';

import { useEpisodeFilter } from 'src/graphql/client/episodeFilter';
import {
  EpisodesFragment,
  useGetEpisodesQuery,
} from 'src/graphql/generated/graphql';
import { EpisodeCard, Line, Loader, Wrapper } from 'src/ui';

export const EpisodeScreen = () => {
  const {
    filter: { name, episode },
  } = useEpisodeFilter();
  const { data, loading, fetchMore } = useGetEpisodesQuery({
    variables: {
      name,
      episode,
      page: 1,
    },
  });
  const episodes = data?.episodes.results;
  const page = data?.episodes.info.next;

  const loadEpisodes = async () => {
    await fetchMore({
      variables: { page },
    });
  };

  const renderItem = ({ item }: { item: EpisodesFragment }) => (
    <EpisodeCard {...item} key={item.id} />
  );

  const itemSeparator = () => {
    return <Line />;
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <FlatList
        data={episodes}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        numColumns={1}
        ItemSeparatorComponent={itemSeparator}
        keyExtractor={(item) => item.id}
        onEndReached={page ? loadEpisodes : null}
        onEndReachedThreshold={2}
        contentContainerStyle={{ paddingLeft: 16 }}
        initialNumToRender={20}
        maxToRenderPerBatch={20}
        ListFooterComponent={page ? <Loader /> : null}
      />
    </Wrapper>
  );
};
