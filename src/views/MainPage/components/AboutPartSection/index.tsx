import { useEffect, useRef, useState } from 'react';
import SectionLabel from '@src/components/common/SectionLabel';
import { PART_NAMES } from '@src/lib/constants/main';
import { EXTERNAL_LINKS } from '@src/lib/constants/routes';
import { GetHomepageResponse } from '@src/lib/types/admin';
import PartCard from './PartCard';
import * as S from './style';

interface AboutPartSectionProps {
  partIntroduction: GetHomepageResponse['partIntroduction'];
  mainColor: string;
}

const TITLE = '6개 파트로 구성된 SOPT';
const DESCRIPTION =
  'SOPT는 기획·디자인·안드로이드·iOS·웹·서버 6개 파트로 구성되어 있어요.\n서로 다른 전문성을 가진 파트원이 한 프로젝트에 모여 협업하는 경험을 쌓아요.';

const PART_ORDER = Object.keys(PART_NAMES);

const REVEAL_OPTIONS: IntersectionObserverInit = {
  rootMargin: '0px 0px -12% 0px',
  threshold: 0.08,
};
const REVEAL_STAGGER_MS = 70;

const AboutPartSection = ({ partIntroduction, mainColor }: AboutPartSectionProps) => {
  const parts = [...partIntroduction].sort(
    (a, b) => PART_ORDER.indexOf(a.part) - PART_ORDER.indexOf(b.part),
  );

  const gridRef = useRef<HTMLDivElement>(null);
  const [revealDelays, setRevealDelays] = useState<Record<number, number>>({});

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver((entries) => {
      const appeared = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => entry.target as HTMLElement)
        .sort((a, b) => Number(a.dataset.index) - Number(b.dataset.index));
      if (appeared.length === 0) return;

      appeared.forEach((el) => observer.unobserve(el));
      setRevealDelays((prev) => {
        const next = { ...prev };
        appeared.forEach((el, order) => {
          next[Number(el.dataset.index)] = order * REVEAL_STAGGER_MS;
        });
        return next;
      });
    }, REVEAL_OPTIONS);

    Array.from(grid.children).forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [parts.length]);

  return (
    <S.Root>
      <S.Body>
        <S.Header>
          <S.TitleGroup>
            <SectionLabel label="About Parts" color={mainColor} />
            <S.Title>{TITLE}</S.Title>
          </S.TitleGroup>
          <S.Description>{DESCRIPTION}</S.Description>
        </S.Header>
        <S.Grid ref={gridRef}>
          {parts.map((part, index) => (
            <PartCard
              key={part.part}
              index={index}
              revealDelay={revealDelays[index]}
              tag={PART_NAMES[part.part]}
              title={`${part.part} 파트`}
              description={part.description}
              href={`${EXTERNAL_LINKS.RECRUIT}/part/${PART_NAMES[part.part]}`}
            />
          ))}
        </S.Grid>
      </S.Body>
    </S.Root>
  );
};

export default AboutPartSection;
