export const dateFormat = (date: string) => {
  const splitedDate = date.split('-');

  return splitedDate[0] + '.' + splitedDate[1];
};
