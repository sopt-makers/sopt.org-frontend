export const checkIsTimeInRange = (startDate: string, endDate: string) => {
  return Date.now() >= new Date(startDate).getTime() && new Date(endDate).getTime() >= Date.now();
};
