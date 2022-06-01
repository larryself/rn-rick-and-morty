type Props = (
  arr: { [key: string]: string }[] | undefined,
  type: string
) => [] | string[];

export const getValues: Props = (arr, type) => {
  if (arr && arr.length > 0) {
    const types = arr?.map(item => item[type]);
    return [...new Set(types)];
  }
  return [];
};
