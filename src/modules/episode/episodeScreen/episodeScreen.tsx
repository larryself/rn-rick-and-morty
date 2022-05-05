import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {useEpisodesQuery} from 'src/modules/graphql/episodes';
import {
  EpisodeCard,
  EpisodeCardProps,
  Wrapper,
  Loader,
  SeasonContainer,
} from 'src/ui';
import {Line} from 'src/ui/radio/style';

export const EpisodeScreen = () => {
  const [episode, setEpisodes] = useState<
    {season: string; episodes: EpisodeCardProps[]}[]
  >([]);
  const {data, loading} = useEpisodesQuery();
  const episodes = data?.episodes.results;

  const getSeason = (episodes: EpisodeCardProps[]): string[] => {
    return Array.from(
      new Set(episodes.map(episode => episode.episode.slice(0, 3))),
    );
  };

  const sortEpisodes = (
    episodes: EpisodeCardProps[],
  ): {season: string; episodes: EpisodeCardProps[]}[] => {
    const currentSeason = getSeason(episodes);
    const sorted = currentSeason.map(season => {
      const episodesToSeason = episodes.filter(
        episode => episode.episode.indexOf(season) >= 0,
      );

      return {season, episodes: episodesToSeason};
    });

    return sorted;
  };
  const renderItem = ({item}: ListRenderItemInfo<EpisodeCardProps>) => (
    <EpisodeCard {...item} />
  );
  useEffect(() => {
    if (!loading) {
      const sortedEpisodes = sortEpisodes(episodes);
      setEpisodes(sortedEpisodes);
    }
  }, [loading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <FlatList
        data={episode}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <SeasonContainer title={item.season}>
            <FlatList
              data={item.episodes}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              numColumns={1}
              ItemSeparatorComponent={() => <Line />}
              keyExtractor={item => item.id}
            />
          </SeasonContainer>
        )}
        keyExtractor={item => item.season}
      />
    </Wrapper>
  );
};
