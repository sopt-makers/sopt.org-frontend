export const dateFormat = (date: string) => {
  if (!date) return null;
  const splitedDate = date.split('-');

  return splitedDate[0] + '.' + splitedDate[1];
};
