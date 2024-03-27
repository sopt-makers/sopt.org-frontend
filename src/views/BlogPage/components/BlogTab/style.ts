import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const Wrapper = styled.section`
  width: 100%;
  margin-top: 188rem;
  display: flex;
  align-items: center;
  justify-content: center;

  /* 태블릿 뷰 */
  @media (max-width: 939px) and (min-width: 768px) {
    margin-top: 188rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 767px) {
    margin-top: 76rem;
  }
`;

export const Container = styled.main`
  width: 900rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  /* 태블릿, 모바일 뷰 */
  @media (max-width: 939px) {
    margin-left: 20rem;
    margin-right: 20rem;
    width: 100%;
  }
`;

export const TabContainer = styled.section`
  display: flex;
  align-items: center;
`;

export const TabTitle = styled.article<{ isSelected: boolean }>`
  font-size: 24rem;
  height: 100%;
  line-height: 36rem;
  font-weight: 700;
  letter-spacing: -0.48rem;

  color: ${({ isSelected }) => (isSelected ? `${colors.gray30}` : `${colors.gray300}`)};

  cursor: pointer;
  position: relative;
  border-bottom: ${({ isSelected }) => isSelected && `2rem solid ${colors.gray200}`};

  padding-bottom: 16rem;
  margin-right: 20rem;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    border-bottom: ${({ isSelected }) => isSelected && `1rem solid ${colors.gray200}`};
    margin-right: 12rem;
    font-size: 18rem;
    padding-bottom: 6rem;
  }

  &:hover {
    color: ${colors.gray100};
  }
`;

export const TabDescription = styled.h1`
  margin-top: 24rem;
  margin-bottom: 48rem;
  word-break: keep-all;

  font-size: 20rem;
  font-weight: 600;
  line-height: 30rem;
  letter-spacing: -0.4rem;
  color: ${colors.gray100};
  width: 100%;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    margin-top: 14rem;
    margin-bottom: 16rem;
    display: flex;

    padding: 16rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 10rem;
    border-radius: 12rem;
    background: ${colors.gray800};

    font-size: 14rem;
    font-weight: 500;
    line-height: 23.1rem;
    letter-spacing: -0.21rem;
    color: ${colors.gray30};
  }
`;

export const SelectContainer = styled.section`
  display: flex;
  gap: 6rem;
`;
