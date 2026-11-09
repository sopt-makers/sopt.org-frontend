import styled from '@emotion/styled';
import { typography } from '@sopt-mds/design-tokens';
import { motion } from 'framer-motion';

export const Section = styled.section`
  height: 970vh;
  position: relative;
  background: #0f1012;
`;

export const Sticky = styled.div<{ $isLoading: boolean }>`
  visibility: ${({ $isLoading }) => ($isLoading ? 'hidden' : 'visible')};
  position: sticky;
  z-index: 1;
  top: 0;
  height: 100vh;
  overflow: hidden;
`;

export const Scene = styled(motion.div)<{ $isLoading: boolean }>`
  visibility: ${({ $isLoading }) => ($isLoading ? 'hidden' : 'visible')};
  position: fixed;
  z-index: 0;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  background: radial-gradient(ellipse at center, #001044 0%, #0f1012 70%);
`;

export const OrbitCanvas = styled.canvas<{ $isReady: boolean; $isBlurred: boolean }>`
  opacity: ${({ $isReady }) => ($isReady ? 1 : 0)};
  filter: ${({ $isBlurred }) =>
    $isBlurred ? 'blur(43px) saturate(1.3) brightness(1.25)' : 'none'};
  transform: ${({ $isBlurred }) => ($isBlurred ? 'scale(1.35)' : 'none')};
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  pointer-events: none;
  transition: filter 0.9s ease, transform 0.9s ease;
`;

export const VisuallyHiddenHeading = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`;

export const RecruitLink = styled(motion.a)`
  position: absolute;
  top: 84%;
  left: 50%;
  translate: -50% 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 12px 36px;
  border: 1px solid #fcfcfc;
  border-radius: 10px;
  color: #fcfcfc;
  white-space: nowrap;
  ${typography.title3}

  @media (max-width: 767px) {
    top: 76%;
    height: 42px;
    padding: 8px 20px;
    ${typography.title5}
  }
`;

export const Intro = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% - 40px);
  translate: -50% -50%;
  text-align: center;
  /* typography/display4 토큰이 없어 직접 지정합니다. */
  font-size: 40px;
  line-height: 60px;
  font-weight: 700;
  letter-spacing: -0.02em;

  @media (min-width: 768px) and (max-width: 1023px) {
    ${typography.heading1}
  }

  @media (max-width: 767px) {
    ${typography.title3}
  }
`;

export const IntroLine = styled.p`
  position: relative;
  width: fit-content;
  max-width: 100%;
  margin: 0 auto;
  color: #808087;
  word-break: keep-all;
`;

export const IntroFill = styled.span`
  position: absolute;
  inset: 0;
  font: inherit;
  letter-spacing: inherit;
  color: #fcfcfc;
`;

export const BaseCharacter = styled.span`
  font: inherit;
  letter-spacing: inherit;
  white-space: pre-wrap;
`;

export const IntroCharacter = styled(motion.span)`
  font: inherit;
  letter-spacing: inherit;
  white-space: pre-wrap;
`;
