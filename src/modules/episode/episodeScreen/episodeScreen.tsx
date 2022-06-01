import React from 'react';
import { FlatList } from 'react-native';
import {
  EpisodesFragment,
  useGetEpisodesQuery,
} from 'src/graphql/generated/graphql';
import { useSelector } from 'src/store/hooks/useSelector';
import { EpisodeCard, Wrapper, Loader, Line } from 'src/ui';

export const EpisodeScreen = () => {
  const { name, episode } = useSelector(state => state.episode);
  const { data, loading, fetchMore } = useGetEpisodesQuery({
    variables: { name: name || '', episode: episode || '', page: 1 },
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
        ItemSeparatorComponent={() => <Line />}
        keyExtractor={item => item.id}
        onEndReached={page ? loadEpisodes : null}
        onEndReachedThreshold={2}
        contentContainerStyle={{ paddingLeft: 16 }}
        initialNumToRender={10}
        maxToRenderPerBatch={20}
        ListFooterComponent={page ? <Loader /> : null}
      />
    </Wrapper>
  );
};
