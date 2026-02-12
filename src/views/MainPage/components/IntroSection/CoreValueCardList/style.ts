import styled from '@emotion/styled';

export const CardListContainer = styled.div`
  display: flex;
  gap: 32px;
  max-width: 1920px;
  align-items: flex-start;
  padding: 0 60px;
  justify-content: center;

  /* 태블릿 뷰 */
  @media (max-width: 1023px) and (min-width: 768px) {
    padding: 0 40px;
    gap: 32px;
  }

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    justify-content: flex-start;
    padding: 0 calc(50vw - 150px);
    scroll-padding: 0 calc(50vw - 150px);
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
