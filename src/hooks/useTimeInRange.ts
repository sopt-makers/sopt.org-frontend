import { useEffect, useState } from 'react';

export default function useTimeInRange(startDate: string, endDate: string) {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();

  const [isValid, setIsValid] = useState(Date.now() >= start && Date.now() <= end);

  useEffect(() => {
    setIsValid(Date.now() >= start && Date.now() <= end);
  }, [start, end]);

  return isValid;
}
