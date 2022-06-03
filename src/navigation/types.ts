import { useRoute } from '@react-navigation/native';
import { Routes } from 'src/navigation/routes';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type Params = {
  id: string;
  title: string;
};

export type RootStackParamList = {
  [Routes.CharacterDetail]: Params;
  [Routes.LocationDetail]: Params;
  [Routes.EpisodeDetail]: Params;
};

export type LocationTabParamList = {
  [Routes.LocationScreen]: undefined;
  [Routes.LocationDetail]: Params;
  [Routes.LocationFilter]: undefined;
};

export type RootStackOptions = NativeStackScreenProps<
  RootStackParamList,
  keyof Omit<RootStackParamList, Routes.MainNavigator>
>;

const useRootStackRoute = () => useRoute<RootStackOptions['route']>();
export { useRootStackRoute as useRoute };
