import styled from '@emotion/styled';
import Image from 'next/image';
import { logoAndSoptDark } from '@src/assets/mainLogo';

const BottomLogo = () => {
  return <ScaledImage src={logoAndSoptDark} alt="솝트 로고" />;
};

const ScaledImage = styled(Image)`
  width: 362px;
  height: auto;
  margin-top: 338px;
  margin-bottom: 86px;

  /* 태블릿 뷰 */
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    width: 209px;
    height: 25px;
  }
  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    width: 138px;
    height: 16px;
  }
`;

export default BottomLogo;
