import styled from '@emotion/styled';
import Link from 'next/link';

export const Container = styled(Link)`
  display: flex;
  justify-content: center;
  position: fixed;

  padding : 17px 20px;
  margin-top: 80px;
  width: 100%;

  background-color: #222220;
  z-index: 100;

  /* 태블릿 뷰 */
  @media (max-width: 768px) and (min-width: 429px) {
    margin-top: 48px;
  }
  /* 모바일 뷰 */
  @media (max-width: 428px) {
    margin-top: 48px;
    padding : 13px 20px;
  }
`;
export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1200px;
  width: 100%;

  color: white;

  /* 모바일 뷰 */
  @media (max-width: 428px) {
    flex-direction: column;
    justify-content: start;
    align-items: baseline;
  }
`;

export const Title = styled.h1`
  text-align: center;

  /* 모바일 뷰 */
  @media (max-width: 428px) {
    font-size: 12px;
  }
`;

export const Description = styled.div`
  display: flex;
  gap: 40px;

  text-align: center;
  font-weight: 500;

  /* 모바일 뷰 */
  @media (max-width: 428px) {
    justify-content: space-between;
    width: 100%;
    font-size: 11px;
  }
`;
export const Timer = styled.div`
  display: flex;
  align-items: center;

  /* 아이콘 위치 이동 방지*/
  width: 128px;
  gap: 10px;
  justify-content: flex-start;
`;

export const View = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
