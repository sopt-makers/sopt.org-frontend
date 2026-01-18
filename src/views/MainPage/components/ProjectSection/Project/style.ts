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
`;

export const Thumbnail = styled.img`
  width: 324px;
  height: 192px;
  border-radius: 8px;
  object-fit: cover;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: ${colors.white};
`;

export const Category = styled.p`
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: ${colors.gray400};
`;

export const Description = styled.p`
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  color: ${colors.gray50};
  white-space: pre-line;
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
`;

export const Members = styled.p`
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: ${colors.white};
`;

