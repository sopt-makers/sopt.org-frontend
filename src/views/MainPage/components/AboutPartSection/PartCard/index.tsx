import { PointerEvent, useEffect, useRef } from 'react';
import * as S from './style';

const MAX_TILT_DEG = 2.5;

interface PartCardProps {
  index: number;
  revealDelay?: number;
  tag: string;
  title: string;
  description: string;
  href: string;
}

const PartCard = ({ index, revealDelay, tag, title, description, href }: PartCardProps) => {
  const revealRef = useRef<HTMLDivElement>(null);

  const cardRef = useRef<HTMLAnchorElement>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef(0);

  useEffect(() => () => cancelAnimationFrame(frameRef.current), []);

  const applyTilt = () => {
    frameRef.current = 0;
    const box = revealRef.current;
    const card = cardRef.current;
    if (!box || !card) return;

    const rect = box.getBoundingClientRect();
    const x = (pointerRef.current.x - rect.left) / rect.width - 0.5;
    const y = (pointerRef.current.y - rect.top) / rect.height - 0.5;
    card.style.setProperty('--tilt-y', `${(x * MAX_TILT_DEG * 2).toFixed(2)}deg`);
    card.style.setProperty('--tilt-x', `${(-y * MAX_TILT_DEG * 2).toFixed(2)}deg`);
  };

  const handlePointerMove = (e: PointerEvent<HTMLAnchorElement>) => {
    if (e.pointerType !== 'mouse') return;
    pointerRef.current = { x: e.clientX, y: e.clientY };
    if (!frameRef.current) frameRef.current = requestAnimationFrame(applyTilt);
  };

  const handlePointerLeave = () => {
    cancelAnimationFrame(frameRef.current);
    frameRef.current = 0;
    cardRef.current?.style.setProperty('--tilt-x', '0deg');
    cardRef.current?.style.setProperty('--tilt-y', '0deg');
  };

  return (
    <S.Reveal
      ref={revealRef}
      data-index={index}
      data-seen={revealDelay !== undefined}
      style={{ '--reveal-delay': `${revealDelay ?? 0}ms` } as React.CSSProperties}
    >
      <S.Card
        ref={cardRef}
        href={href}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <S.Ring aria-hidden />
        <S.Surface aria-hidden>
          <S.Wash />
          <S.Glow />
        </S.Surface>
        <S.Content>
          <S.Tag>{tag}</S.Tag>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Content>
        <S.Cta aria-hidden>
          <S.CtaIcon />
        </S.Cta>
      </S.Card>
    </S.Reveal>
  );
};

export default PartCard;
