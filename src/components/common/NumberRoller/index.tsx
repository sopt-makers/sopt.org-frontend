import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface NumberRollerProps {
  goalNumber: number;
  duration?: number;
  rollRange?: number;
}

const NumberRoller = ({ goalNumber, duration = 2, rollRange = 50 }: NumberRollerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const startNumber = Math.max(goalNumber - rollRange, 0);

  const count = useMotionValue(startNumber);

  const roundedNumber = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, goalNumber, {
        type: 'tween',
        duration,
        ease: 'circOut',
      });

      return () => controls.stop();
    } else {
      count.set(startNumber);
    }
  }, [isInView, count, goalNumber, duration, startNumber]);

  return <motion.span ref={ref}>{roundedNumber}</motion.span>;
};

export default NumberRoller;
