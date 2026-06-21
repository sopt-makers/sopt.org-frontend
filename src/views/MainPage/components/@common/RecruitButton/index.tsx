import router from 'next/router';
import { ButtonHTMLAttributes, PropsWithChildren, useState } from 'react';
import { RECRUIT_URL } from '@src/lib/constants/routes';
import * as S from './style';

export type RecruitButtonSize = 'sm' | 'md';

interface RecruitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mainColor: string;
  highColor: string;
  size?: RecruitButtonSize;
}

export default function RecruitButton({
  children,
  mainColor,
  highColor,
  size = 'md',
  ...props
}: PropsWithChildren<RecruitButtonProps>) {
  const [blurPosition, setBlurPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleClick = () => {
    router.push(RECRUIT_URL);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setBlurPosition({ x, y });
  };

  return (
    <S.RecruitButtonWrapper
      onClick={handleClick}
      size={size}
      mainColor={mainColor}
      highColor={highColor}
      type="button"
      {...props}
    >
      <S.MouseTrackerWrapper
        size={size}
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
