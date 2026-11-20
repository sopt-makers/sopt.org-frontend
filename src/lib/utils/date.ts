export const checkIsTimeInRange = (startDate: string, endDate: string, now = Date.now()) => {
  return now >= new Date(startDate).getTime() && now <= new Date(endDate).getTime();
};
