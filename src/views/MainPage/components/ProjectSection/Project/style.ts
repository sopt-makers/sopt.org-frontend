import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const Wrapper = styled.article`
  display: flex;
  width: 352px;
  flex-direction: column;
  padding: 14px;
  gap: 10px;
  border: 1px solid ${colors.gray700};
  border-radius: 20px;
  background-color: ${colors.gray900};

  @media (max-width: 74.9375rem) {
    width: 176px;
    height: 172.5px;
    padding: 7px;
    border-radius: 10px;
  }
`;

export const Thumbnail = styled.img`
  width: 324px;
  height: 192px;
  border-radius: 8px;
  object-fit: cover;

  @media (max-width: 74.9375rem) {
    width: 162px;
    height: 96px;
    border-radius: 4px;
  } 
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 74.9375rem) {
    gap: 0px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: ${colors.white};

  @media (max-width: 74.9375rem) {
    font-size: 9px;
    line-height: 14px;
  }

`;

export const Category = styled.p`
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: ${colors.gray400};

  @media (max-width: 74.9375rem) {
    font-size: 6px;
    line-height: 8px;
  }

`;

export const Description = styled.p`
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  color: ${colors.gray50};
  white-space: pre-line;

  @media (max-width: 74.9375rem) {
    font-size: 7px;
    line-height: 11px;
    white-space: normal;
  }
`;

export const StatusLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const StatusIcon = styled.img`
  width: 5px;
  height: 5px;
`;

export const FooterLayout = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Status = styled.p` 
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: ${colors.gray400};

  @media (max-width: 74.9375rem) {
    font-size: 6px;
    line-height: 8px;
  }
`;

export const Members = styled.p`
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: ${colors.white};

  @media (max-width: 74.9375rem) {
    font-size: 6px;
    line-height: 8px;
  }

`;

