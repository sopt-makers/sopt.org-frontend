export function sortBy<T>(array: T[], key: keyof T): T[] {
  return [...array].sort((a, b) => {
    const aValue = a[key];
    const bValue = b[key];
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return aValue - bValue;
    }
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return (aValue as string).localeCompare(bValue as string);
    }
    return 0;
  });
}
