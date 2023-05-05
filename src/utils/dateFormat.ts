export const dateFormat = (date: string) => {
  if (!date) return null;
  const splitedDate = date.split('-');

  return splitedDate[0] + '.' + splitedDate[1];
};

export const formatDate = (date: Date, format: 'yyyymmdd' | 'mmdd'): string => {
  switch (format) {
    case 'yyyymmdd':
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
    case 'mmdd':
      return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' });
    default:
      return date.toLocaleDateString();
  }
};
