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
  @media (max-width: 765.9px) {
    width: 276px;
  }
`;

export default BottomLogo;
