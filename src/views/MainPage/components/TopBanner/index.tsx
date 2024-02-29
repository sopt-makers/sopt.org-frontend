import * as S from './style';
import { ReactComponent as IcView } from '@src/assets/icons/ic_view.svg';
import { ReactComponent as IcTimer } from '@src/assets/icons/ic_timer.svg';
import Timer from '@src/components/common/Timer';
import { useEffect, useState } from 'react';

export default function TopBanner() {
  const TARGET_DATE = new Date('2024-03-08:18:00');

  const [isYellow, setIsYellow] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      scrollPosition <= 605 ? setIsYellow(false) : setIsYellow(true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <S.Container href="/recruit" $isYellow={isYellow}>
    <S.Wrapper>
      <S.Title>SOPT의 34번째 열정이 되어주세요! &nbsp; &gt;
      </S.Title>
      <S.Description>
        <S.Timer>
            <IcTimer/>
            <Timer targetDate={TARGET_DATE} endMessage='모집 마감'/>
        </S.Timer>
        <S.View>
            <IcView/><span>0000명</span>
        </S.View>
      </S.Description>
    </S.Wrapper>
    </S.Container>
  );
}

