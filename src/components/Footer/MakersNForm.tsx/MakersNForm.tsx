import { FC } from 'react';
import useScroll from '@src/hooks/useScroll';
import St from './MakersNForm.style';

const MakersNForm: FC = () => {
  const { isScrollingDown, isScrollTop } = useScroll();

  return (
    <St.FooterForm hide={isScrollingDown && !isScrollTop}>
      <St.FooterLink
        href="https://playground.sopt.org/makers"
        target="_blank"
        rel="noopener noreferrer"
      >
        만든 사람들
      </St.FooterLink>
      <St.FooterLink
        href="https://walla.my/sopt_official"
        target="_blank"
        rel="noopener noreferrer"
      >
        의견 제안하기
      </St.FooterLink>
    </St.FooterForm>
  );
};

export default MakersNForm;
