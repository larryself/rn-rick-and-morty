import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, useRoute } from '@react-navigation/native';
import { Routes } from 'src/navigation/routes';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type Params = {
  id: string;
  title: string;
};

export type RootStackParamList = {
  [Routes.CharacterScreen]: CharacterTabParamList;
  [Routes.LocationScreen]: LocationTabParamList;
  [Routes.EpisodeScreen]: EpisodeTabParamList;
};

export type LocationTabParamList = {
  [Routes.LocationScreen]: undefined;
  [Routes.LocationDetail]: Params;
  [Routes.LocationFilter]: undefined;
};

export type EpisodeTabParamList = {
  [Routes.EpisodeScreen]: undefined;
  [Routes.EpisodeDetail]: Params;
  [Routes.EpisodeFilter]: undefined;
};

export type CharacterTabParamList = {
  [Routes.CharacterScreen]: undefined;
  [Routes.CharacterDetail]: Params;
  [Routes.CharacterFilter]: undefined;
};

export type RootStackScreenProps<RouteName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, RouteName>;

export type CharacterTabScreenProps<
  RouteName extends keyof CharacterTabParamList
> = CompositeScreenProps<
  BottomTabScreenProps<CharacterTabParamList, RouteName>,
  RootStackScreenProps<keyof RootStackParamList>
>;

export type EpisodeTabScreenProps<RouteName extends keyof EpisodeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<EpisodeTabParamList, RouteName>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type LocationTabScreenProps<
  RouteName extends keyof LocationTabParamList
> = CompositeScreenProps<
  BottomTabScreenProps<LocationTabParamList, RouteName>,
  RootStackScreenProps<keyof RootStackParamList>
>;
