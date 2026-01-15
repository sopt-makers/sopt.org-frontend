import { useEffect, useState } from 'react';
import useInView from '@src/hooks/useInView';

type NumberRollerProps = {
  goalNumber: number;
  rollRange?: number;
};

const NumberRoller = ({ goalNumber, rollRange = 50 }: NumberRollerProps) => {
  const startNumber = Math.max(goalNumber - rollRange, 0);
  const [number, setNumber] = useState(startNumber);
  const { isInView, ref: wrapperRef } = useInView();

  useEffect(() => {
    if (isInView) setNumber(startNumber);
  }, [isInView, startNumber]);

  useEffect(() => {
    if (!isInView || number >= goalNumber) return;
    const id = window.setTimeout(() => setNumber((n) => n + 1), 40);

    return () => window.clearTimeout(id);
  }, [isInView, number, goalNumber]);

  return <span ref={wrapperRef}>{number}</span>;
};

export default NumberRoller;
