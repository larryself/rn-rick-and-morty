export const unique = (arr: [], type: string) => {
  const types = arr.map(item => item[type]);
  return [...new Set(types)];
};
