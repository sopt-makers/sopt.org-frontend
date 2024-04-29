import styled from '@emotion/styled';
import Image from 'next/image';
import { logoNowSopt } from '@src/assets/mainLogo';

const BottomLogo = () => {
  return <ScaledImage src={logoNowSopt} alt="34기 솝트 로고" />;
};

const ScaledImage = styled(Image)`
  width: 362px;
  height: auto;
  margin-top: 338px;
  margin-bottom: 86px;
  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    width: 276px;
  }
`;

export default BottomLogo;
