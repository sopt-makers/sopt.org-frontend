import { useScroll, useTransform } from 'framer-motion';
import { RefObject, useEffect, useState } from 'react';
import { useIsMobile } from '@src/hooks/useDevice';
import * as S from './style';

interface MotionTitleProps {
  contentRef: RefObject<HTMLElement>;
  content: string;
}

export default function MotionTitle({ contentRef, content }: MotionTitleProps) {
  const isMobileSize = useIsMobile('768px');

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ['end center', 'start start'],
  });

  const [style, setStyle] = useState<{ opacity?: number; clipPath?: string }>();
  const scrollValue = useTransform(scrollYProgress, [1, 0.4], ['100%', '0%']);

  useEffect(() => {
    const unsubscribe = scrollValue.on('change', (value) => {
      const percentValue = Number(value.split('%')[0]);
      const newStyle = isMobileSize
        ? { opacity: (100 - percentValue) / 100 }
        : { clipPath: `inset(0% ${percentValue}% 0% 0%)` };
      setStyle(newStyle);
    });

    return () => {
      unsubscribe();
    };
  }, [scrollValue, isMobileSize]);

  return <S.MotionTitle style={style} data-text={content} />;
}
