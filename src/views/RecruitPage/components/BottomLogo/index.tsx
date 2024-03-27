import styled from '@emotion/styled';
import Image from 'next/image';
import { logoNowSopt } from '@src/assets/mainLogo';

const BottomLogo = () => {
  return <ScaledImage src={logoNowSopt} alt="34기 솝트 로고" />;
};

const ScaledImage = styled(Image)`
  width: 362rem;
  height: auto;
  margin-top: 338rem;
  margin-bottom: 86rem;
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    width: 276rem;
  }
`;

export default BottomLogo;
