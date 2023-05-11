import { useEffect, useState } from 'react';
import useInView from '@src/hooks/useInView';

type NumberRollerProps = {
  goalNumber: number;
  rollRange?: number;
};

const NumberRoller = ({ goalNumber, rollRange = 50 }: NumberRollerProps) => {
  const [number, setNumber] = useState(Math.max(goalNumber - rollRange, 0));
  const { isInView, ref: wrapperRef } = useInView();

  useEffect(() => {
    if (isInView && number < goalNumber) {
      setTimeout(() => {
        setNumber((n) => n + 1);
      }, 100);
    }
  }, [goalNumber, isInView, number]);

  return <span ref={wrapperRef}>{number}</span>;
};

export default NumberRoller;
