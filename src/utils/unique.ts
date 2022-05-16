export const unique = (arr: any[], type: string) => {
  if (arr.length === 0 || arr) {
    return ['nothing found'];
  }
  const types = arr.map(item => item[type]);
  return [...new Set(types)];
};
