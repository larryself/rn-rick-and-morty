import React, { useEffect } from 'react';

import { useGetLocationQuery } from 'src/graphql/generated/graphql';
import { useNavigation } from 'src/navigation/routes';
import { useRoute } from 'src/navigation/types';
import { CharacterCard, DetailContainer, Loader } from 'src/ui';

import { Wrap } from './style';

export const LocationDetail = () => {
  const { setOptions } = useNavigation();
  const {
    params: { title, id },
  } = useRoute();
  const { data, loading } = useGetLocationQuery({
    variables: { id },
  });
  useEffect(() => {
    setOptions({ title });
  }, [title]);

  if (loading) {
    return <Loader />;
  }

  return (
    <DetailContainer
      firstInfo={data?.location.type}
      title={data?.location.name}
      latterInfo={data?.location.dimension}
      subTitle={'Characters'}>
      <Wrap>
        {data?.location.residents.map((resident) => (
          <CharacterCard key={resident.id} character={resident} />
        ))}
      </Wrap>
    </DetailContainer>
  );
};
