import { FC } from 'react';
import useScrollPosition from '@src/hooks/useScrollPosition';
import St from './style';

const MakersNForm: FC = () => {
  const { isScrollingDown, isScrollTop } = useScrollPosition();

  return (
    <St.FooterForm hide={isScrollingDown && !isScrollTop}>
      <St.FooterLink
        href="https://playground.sopt.org/makers"
        target="_blank"
        rel="noopener noreferrer"
      >
        만든 사람들
      </St.FooterLink>
      <St.FooterLink href="https://pf.kakao.com/_sxaIWG" target="_blank" rel="noopener noreferrer">
        의견 제안하기
      </St.FooterLink>
    </St.FooterForm>
  );
};

export default MakersNForm;
