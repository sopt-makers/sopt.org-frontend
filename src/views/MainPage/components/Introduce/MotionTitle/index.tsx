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

  const [clipPathValue, setClipPathValue] = useState<string>('inset(0% 0% 0% 0%)');
  const [opacityValue, setOpacityValue] = useState<number>(0);
  const scrollValue = useTransform(scrollYProgress, [1, 0.4], ['100%', '0%']);

  useEffect(() => {
    const unsubscribe = scrollValue.on('change', (value) => {
      const percentValue = Number(value.split('%')[0]);
      isMobileSize
        ? setOpacityValue((100 - percentValue) / 100)
        : setClipPathValue(`inset(0% ${percentValue}% 0% 0%)`);
    });

    return () => {
      unsubscribe();
    };
  }, [scrollValue, isMobileSize]);

  return (
    <>
      {isMobileSize ? (
        <S.MotionTitle
          style={{
            opacity: opacityValue,
          }}
          data-text={content}
        />
      ) : (
        <S.MotionTitle
          style={{
            clipPath: clipPathValue,
          }}
          data-text={content}
        />
      )}
    </>
  );
}
