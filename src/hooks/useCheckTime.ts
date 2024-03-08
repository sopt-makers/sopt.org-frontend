import { useEffect, useState } from 'react';

export default function useCheckTime() {
  const START_DATE = new Date('2024-03-03 00:00:00');
  const END_DATE = new Date('2024-03-08 18:00:00');
  const [startDiff, setStartDiff] = useState<number>(START_DATE.getTime() - Date.now());
  const [endDiff, setEndDiff] = useState<number>(Date.now() - END_DATE.getTime());
  
  useEffect(()=>{
    setStartDiff(START_DATE.getTime() - Date.now());
    setEndDiff(Date.now() - END_DATE.getTime());
  }, []);

  return startDiff<=0 && endDiff<=0 ;
}
