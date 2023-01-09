import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { ReactComponent as UpArrow } from '@src/assets/icons/upArrow.svg';
import { FadeIn, FadeOut } from '@src/lib/styles/animation';

const debounce = (cb: () => void, delay = 100) => {
  let timer: ReturnType<typeof setTimeout>;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb();
    }, delay);
  };
};
const SCROLL_MINIMUM_VALUE = 120;

export function ScrollToTopButton() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const checkScroll = debounce(() => {
    window.scrollY > SCROLL_MINIMUM_VALUE ? setIsScrolled(true) : setIsScrolled(false);
  });
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [checkScroll]);

  return (
    <>
      {mounted && (
        <Root isScrolled={isScrolled} onClick={handleClick}>
          <span>UP</span>
          <UpArrow />
        </Root>
      )}
    </>
  );
}

const Root = styled.button<{ isScrolled: boolean }>`
  position: fixed;
  right: 20px;
  bottom: 30px;
  border-radius: 52px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  background: #242424;
  padding: 16px 32px;
  z-index: 9999;
  cursor: pointer;
  ${({ isScrolled }) =>
    isScrolled
      ? css`
          ${FadeIn}
          animation:fadein 0.4s;
        `
      : css`
          ${FadeOut}
          animation:fadeout 0.4s;
          animation-fill-mode: forwards;
        `}

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    padding: 16px;
  }

  & > span {
    font-weight: 600;
    font-size: 24px;
    line-height: 48px;
    color: #ffffff;
    /* 모바일 뷰 */
    @media (max-width: 767px) {
      display: none;
    }
  }
`;
