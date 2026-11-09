import { useEffect, useState } from 'react';
import Timer from '@src/components/common/Timer';
import { useIsMobile } from '@src/hooks/useDevice';
import { EXTERNAL_LINKS } from '@src/lib/constants/routes';
import useGetVisitor from '../../hooks/useGetVisitor';
import * as S from './style';

interface TopBannerProps {
  mainColor: string;
  targetTime?: string;
  generation: number;
}

export default function TopBanner({ mainColor, targetTime, generation }: TopBannerProps) {
  const TARGET_DATE = targetTime ? new Date(targetTime) : new Date();
  const isMobile = useIsMobile();
  const CHANGE_POSITION = isMobile ? 495 : 605;
  const { data } = useGetVisitor(); // 방문자 조회

  const [isKeyColor, setIsKeyColor] = useState<boolean>(false);

  useEffect(function synchronizeBannerColorWithScroll() {
    const handleScroll = () => {
      setIsKeyColor(window.scrollY > CHANGE_POSITION);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [CHANGE_POSITION]);

  return (
    <S.Container href={EXTERNAL_LINKS.RECRUIT} isKeyColor={isKeyColor} mainColor={mainColor}>
      <S.Wrapper>
        <div>
          <S.Title>솝트의 {generation}번째 열정이 되어주세요!</S.Title>
        </div>
        <S.Description>
          <S.Timer>
            <S.TimerIcon width={isMobile ? 14 : 24} height={isMobile ? 14 : 24} aria-hidden="true" />
            <Timer targetDate={TARGET_DATE} endMessage="모집 마감" />
          </S.Timer>
          {data && (
            <S.View>
              <span>오늘 {data.count}명이 방문했어요 &nbsp; &gt;</span>
            </S.View>
          )}
        </S.Description>
      </S.Wrapper>
    </S.Container>
  );
}
