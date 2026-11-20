import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { RefObject, useState } from 'react';
import { EXTERNAL_LINKS } from '@src/lib/constants/routes';
import * as S from './style';

interface FloatingRecruitCTAProps {
  recordsRef: RefObject<HTMLElement>;
  recruitSectionRef: RefObject<HTMLElement>;
  mainColor: string;
  textColor: string;
}

export default function FloatingRecruitCTA({
  recordsRef,
  recruitSectionRef,
  mainColor,
  textColor,
}: FloatingRecruitCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress: recordsProgress } = useScroll({
    target: recordsRef,
    offset: ['center end', 'center start'],
    layoutEffect: false,
  });
  const { scrollYProgress: recruitSectionProgress } = useScroll({
    target: recruitSectionRef,
    offset: ['start end', 'start start'],
    layoutEffect: false,
  });
  const isInRange = useTransform(
    [recordsProgress, recruitSectionProgress],
    ([atRecords, atRecruitSection]) => Number(atRecords) > 0 && Number(atRecruitSection) === 0,
  );

  useMotionValueEvent(isInRange, 'change', setIsVisible);

  return (
    <S.FloatingRecruitLink
      href={EXTERNAL_LINKS.RECRUIT}
      aria-hidden={!isVisible}
      tabIndex={isVisible ? undefined : -1}
      mainColor={mainColor}
      textColor={textColor}
      $isVisible={isVisible}
    >
      지원하기
      <S.Arrow aria-hidden="true" />
    </S.FloatingRecruitLink>
  );
}
