import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

const SectionTitle = styled.div`
  color: ${colors.gray10};
  font-size: 28rem;
  font-weight: 700;
  line-height: 150%; /* 42px */
  letter-spacing: -0.56px;
  margin-bottom: 40px;
  & > * {
    font-size: 100%;
  }

  @media (max-width: 56.1875rem) {
    font-size: 18rem;
    font-weight: 700;
    letter-spacing: -0.36px;
    margin-bottom: 20px;

    & > span {
      display: none;
    }
  }
`;

const PlaygroundLinkWrapper = styled.div`
  @media (max-width: 56.1875rem) {
    display: none;
  }
  color: ${colors.gray400};
  /* Body/2_Medium_16 */
  font-family: SUIT;
  font-size: 16rem;
  font-style: normal;
  font-weight: 500;
  line-height: 165%; /* 26.4px */
  letter-spacing: -0.24px;
  margin-top: -44px;
  margin-bottom: 28px;
  display: flex;
  gap: 4px;

  & > * {
    font-size: 100%;
  }
`;

const PlaygroundLink = styled.a`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: ${colors.gray400};
    left: 0;
    bottom: 4px;
  }
`;

const S = {
  SectionTitle,
  PlaygroundLinkWrapper,
  PlaygroundLink,
};
export default S;
