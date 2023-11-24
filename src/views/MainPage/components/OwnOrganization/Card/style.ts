import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const CardWrapper = styled.div<{ background: string }>`
  background: ${({ background }) => background};
  border-radius: 19px;
  padding: 39px 0;
  width: 712px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const FooterKorName = styled.div`
  width: 144px;
  text-align: center;
  padding: 16px 0;
  color: ${colors.white};
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: rgba(117, 97, 79, 0.33);
  backdrop-filter: blur(2.949289321899414px);
  border-radius: 14px;
  color: #fff;

  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.904px;
`;

export const FooterEngName = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28.288px; /* 138.027% */
  letter-spacing: -1.025px;
  padding-bottom: 4px;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 30px;
  padding-right: 42px;
`;

export const ContentWrapper = styled.div`
  padding: 0 41px;
  flex: 1;
  word-break: keep-all;
`;

export const TextWrapper = styled.span<{ weight: 'normal' | 'bold' }>`
  font-size: 20px;
  color: ${colors.white};
  font-weight: ${({ weight }) => weight};
  line-height: 35px; /* 175% */
  letter-spacing: -0.8px;
`;
