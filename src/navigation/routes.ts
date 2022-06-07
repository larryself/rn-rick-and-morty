import {
  NavigationProp,
  useNavigation as useNativeNavigation,
} from '@react-navigation/native';

export enum Routes {
  EpisodeStack = 'EpisodeStack',
  EpisodeDetail = 'EpisodeDetail',
  EpisodeScreen = 'EpisodeScreen',
  EpisodeFilter = 'EpisodeFilter',
  CharacterStack = 'CharacterStack',
  CharacterDetail = 'CharacterDetail',
  CharacterScreen = 'CharacterScreen',
  CharacterFilter = 'CharacterFilter',
  MainNavigator = 'MainNavigator',
  LocationStack = 'LocationStack',
  LocationDetail = 'LocationDetail',
  LocationScreen = 'LocationScreen',
  LocationFilter = 'LocationFilter',
}

export const useNavigation = () =>
  useNativeNavigation<NavigationProp<Record<string, unknown>, Routes>>();
