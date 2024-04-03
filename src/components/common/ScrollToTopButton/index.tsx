import { useEffect, useState } from 'react';
import { ReactComponent as UpArrow } from '@src/assets/icons/ic_up_arrow.svg';
import { debounce } from '@src/lib/utils/debounce';
import * as S from './style';

const SCROLL_MINIMUM_VALUE = 120;

export default function ScrollToTopButton() {
  const [isScrolled, setIsScrolled] = useState(false);

  const checkScroll = debounce(() => {
    window.scrollY > SCROLL_MINIMUM_VALUE ? setIsScrolled(true) : setIsScrolled(false);
  });

  const handleUpBtnClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [checkScroll]);

  return (
    <>
      {isScrolled && (
        <S.Wrapper onClick={handleUpBtnClick}>
          <S.Text>UP</S.Text>
          <UpArrow />
        </S.Wrapper>
      )}
    </>
  );
}
