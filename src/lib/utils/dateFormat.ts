export const dateFormat = (date: string) => {
  if (!date) return null;
  const splitedDate = date.split('-');

  return splitedDate[0] + '.' + splitedDate[1];
};

export const formatDate = (
  date: Date,
  format: 'yyyymmdd' | 'mmdd',
  separator: '/' | '.' = '/',
): string => {
  switch (format) {
    case 'yyyymmdd':
      return date
        .toLocaleDateString('ja-JP', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
        .replaceAll('/', separator);
    case 'mmdd':
      return date
        .toLocaleDateString('ja-JP', { month: '2-digit', day: '2-digit' })
        .replaceAll('/', separator);
    default:
      return date.toLocaleDateString().replaceAll('/', separator);
  }
};
