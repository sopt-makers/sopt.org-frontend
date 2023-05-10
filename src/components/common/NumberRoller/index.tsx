import { useEffect, useRef, useState } from 'react';
import useInView from '@src/hooks/useInView';

type NumberRollerProps = {
  goalNumber: number;
  rollRange?: number;
};

const NumberRoller = ({ goalNumber, rollRange = 50 }: NumberRollerProps) => {
  const [number, setNumber] = useState(Math.max(goalNumber - rollRange, 0));
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const { isInView } = useInView(wrapperRef, -20);

  useEffect(() => {
    const timerIntervalId = setInterval(() => {
      if (isInView) {
        console.log({ isInView });
        setNumber((n) => {
          if (n >= goalNumber) {
            clearInterval(timerIntervalId);
            return n;
          }
          return n + 1;
        });
      }
    }, 100);
    return () => {
      clearInterval(timerIntervalId);
    };
  }, [goalNumber, isInView]);

  return <span ref={wrapperRef}>{number}</span>;
};

export default NumberRoller;
