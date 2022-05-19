export const getValues = (
  arr: { [key: string]: string }[] | undefined,
  type: string
) => {
  if (arr && arr.length > 0) {
    const types = arr?.map(item => item[type]);
    return [...new Set(types)];
  }
  return [];
};
