import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const Wrapper = styled.section`
  display: flex;
  margin-bottom: 11px;
  flex-direction: column;
  justify-content: center;
  gap: 48px;
`;

export const VideoWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 32px;
  align-items: center;
  gap: 32px;
  border-radius: 20px;
  background-color: ${colors.gray800};
  cursor: pointer;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Video = styled.div`
  min-width: 401px;
  overflow: hidden;
  border-radius: 17px;

  & > iframe {
    min-width: 401px;
    height: 224px;
  }

  @media (max-width: 767px) {
    height: auto;

    & > iframe {
      min-width: 320px;
    }
  }

  @media (max-width: 430px) {
    min-width: 271px;
    height: auto;

    & > iframe {
      min-width: 271px;
    }
  }
`;

export const VideoDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const VideoTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: -0.48px;
  color: ${colors.white};
  white-space: pre-line;
`;

export const VideoDescriptionText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.24px;
  color: ${colors.white};
  white-space: pre-line;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.56px;
  color: ${colors.white};
`;
