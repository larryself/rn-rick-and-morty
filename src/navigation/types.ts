import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Character: CharacterTabParamList;
  Location: LocationTabParamList;
  Episode: EpisodeTabParamList;
};
export type LocationTabParamList = {
  LocationScreen: undefined;
  LocationDetail: { id: string; title: string };
  LocationFilter: undefined;
};

export type EpisodeTabParamList = {
  EpisodeScreen: undefined;
  EpisodeDetail: { id: string; title: string };
  EpisodeFilter: undefined;
};
export type CharacterTabParamList = {
  CharacterScreen: undefined;
  CharacterDetail: { id: string; title: string };
  CharacterFilter: undefined;
};

export type RootStackScreenProps<RouteName extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, RouteName>;

export type CharacterTabScreenProps<RouteName extends keyof CharacterTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<CharacterTabParamList, RouteName>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type EpisodeTabScreenProps<RouteName extends keyof EpisodeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<EpisodeTabParamList, RouteName>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type LocationTabScreenProps<RouteName extends keyof LocationTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<LocationTabParamList, RouteName>,
    RootStackScreenProps<keyof RootStackParamList>
  >;
