import { useEffect, useState } from 'react';
import { ReactComponent as IcTimer } from '@src/assets/icons/ic_timer.svg';
import Timer from '@src/components/common/Timer';
import { useIsMobile } from '@src/hooks/useDevice';
import useGetVisitor from '../../hooks/useGetVisitor';
import * as S from './style';

export default function TopBanner() {
  const TARGET_DATE = new Date('2024-09-13 18:00:00');
  const isMobile = useIsMobile();
  const CHANGE_POSITION = isMobile ? 495 : 605;
  const { data } = useGetVisitor(); // 방문자 조회

  const [isKeyColor, setIsKeyColor] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      scrollPosition <= CHANGE_POSITION ? setIsKeyColor(false) : setIsKeyColor(true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <S.Container href="/recruit" isKeyColor={isKeyColor}>
      <S.Wrapper>
        <div>
          <S.Title>솝트의 36번째 열정이 되어주세요!</S.Title>
        </div>
        <S.Description>
          <S.Timer>
            {isMobile ? <IcTimer width={14} height={14} viewBox="0 0 24 24" /> : <IcTimer />}
            <Timer targetDate={TARGET_DATE} endMessage="모집 마감" />
          </S.Timer>
          {data && (
            <S.View>
              <span>오늘 {data.Count}명이 방문했어요 &nbsp; &gt;</span>
            </S.View>
          )}
        </S.Description>
      </S.Wrapper>
    </S.Container>
  );
}
