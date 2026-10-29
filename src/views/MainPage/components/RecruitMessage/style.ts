import styled from '@emotion/styled';
import { IconChevronRight } from '@sopt-makers/icons';
import { media } from '@src/lib/styles/breakpoints';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding: 160px 0;

  ${media.tablet} {
    padding: 120px 40px;
  }

  ${media.mobile} {
    gap: 24px;
    padding: 80px 20px;
  }
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Badge = styled.div<{ mainColor: string }>`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border: 1px solid #2e2e35;
  border-radius: 999px;
  background: #17181c;
  color: #c3c3c6;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.02em;

  strong {
    color: ${({ mainColor }) => mainColor};
    font-weight: 700;
    letter-spacing: inherit;
  }

  ${media.mobile} {
    font-size: 12px;
    line-height: 18px;

    strong {
      font-weight: 600;
    }
  }
`;

export const Headline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  text-align: center;
`;

export const Title = styled.h2`
  color: #fcfcfc;
  font-size: 48px;
  font-weight: 700;
  line-height: 62px;
  letter-spacing: -0.02em;

  ${media.mobile} {
    font-size: 24px;
    line-height: 36px;
  }
`;

export const Description = styled.p`
  color: #808087;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: -0.02em;

  ${media.mobile} {
    max-width: 280px;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    word-break: keep-all;
  }
`;

export const DesktopBreak = styled.br`
  ${media.mobile} {
    display: none;
  }
`;

export const RecruitLink = styled.a<{ mainColor: string; textColor: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  height: 64px;
  padding: 0 20px 0 32px;
  border-radius: 100px;
  background: ${({ mainColor }) => mainColor};
  box-shadow: ${({ mainColor }) => `0 0 0 1px ${mainColor}52, 0 4px 14px -4px ${mainColor}61,
    0 10px 30px -10px ${mainColor}47`};
  color: ${({ textColor }) => textColor};
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.02em;

  ${media.mobile} {
    height: 42px;
    padding: 0 16px 0 24px;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }
`;

export const Arrow = styled(IconChevronRight)`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  ${media.mobile} {
    width: 20px;
    height: 20px;
  }
`;
