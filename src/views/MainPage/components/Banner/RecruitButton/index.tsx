import { PropsWithChildren, useState } from 'react';
import * as S from './style';

interface BannerColor {
  mainColor: string;
  highColor: string;
}
export default function RecruitButton({
  children,
  mainColor,
  highColor,
}: PropsWithChildren<BannerColor>) {
  const [blurPosition, setBlurPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setBlurPosition({ x, y });
  };

  return (
    <S.RecruitButtonWrapper href="/recruit" mainColor={mainColor} highColor={highColor}>
      <S.MouseTrackerWrapper
        onMouseMove={handleMouseMove}
        x={blurPosition.x}
        y={blurPosition.y}
        mainColor={mainColor}
        highColor={highColor}
      >
        <div>{children}</div>
      </S.MouseTrackerWrapper>
    </S.RecruitButtonWrapper>
  );
}
