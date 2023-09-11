import styled from 'styled-components';
import Image from 'next/image';
import { logoDoSopt } from '@src/assets/mainLogo';

const BottomLogo = () => {
  return <ScaledImage src={logoDoSopt} alt="DO SOPT" />;
};

const ScaledImage = styled(Image)`
  width: 368px;
  height: auto;
  margin-top: 300px;
  margin-bottom: 80px;
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 276px;
  }
`;

export default BottomLogo;
