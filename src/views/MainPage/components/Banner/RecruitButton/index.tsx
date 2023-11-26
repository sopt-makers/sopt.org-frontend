import Link from 'next/link';
import { PropsWithChildren, useState } from 'react';
import * as S from './style';

export default function RecruitButton({ children }: PropsWithChildren<object>) {
  const [blurPosition, setBlurPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setBlurPosition((prev) => ({
      x: (9 * prev.x + x) / 10,
      y: (9 * prev.y + y) / 10,
    }));
  };

  return (
    <Link href="/recruit">
      <S.RecruitButtonWrapper>
        <S.MouseTrackerWrapper onMouseMove={handleMouseMove} x={blurPosition.x} y={blurPosition.y}>
          {children}
        </S.MouseTrackerWrapper>
      </S.RecruitButtonWrapper>
    </Link>
  );
}
