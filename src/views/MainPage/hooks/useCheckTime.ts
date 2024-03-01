import useInterval from '@src/hooks/useInterval';
import { useState } from 'react';

export default function useCheckTime(targetDate : Date) {
  const [timeDiff, setTimeDiff] = useState<number>(targetDate.getTime() - Date.now());
   
  useInterval(() => {
    setTimeDiff(targetDate.getTime() - Date.now());
  }, 1000);

  return timeDiff<=0 ;
}
