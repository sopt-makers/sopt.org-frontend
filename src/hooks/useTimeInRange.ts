import { useEffect, useState } from 'react';

export default function useTimeInRange(startDate: string, endDate: string) {
  const [isValid, setIsValid] = useState(
    Date.now() >= new Date(startDate).getTime() && Date.now() <= new Date(endDate).getTime(),
  );

  useEffect(() => {
    const check = () => {
      setIsValid(
        Date.now() >= new Date(startDate).getTime() && Date.now() <= new Date(endDate).getTime(),
      );
    };
    const validate = setInterval(check, 1000);

    return () => clearInterval(validate);
  }, [startDate, endDate]);

  return isValid;
}
