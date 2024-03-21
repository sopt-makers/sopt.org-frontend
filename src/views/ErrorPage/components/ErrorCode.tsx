import { useIsMobile, useIsTablet } from '@src/hooks/useDevice';
import { Ic404Back, Ic404Front, Ic404Ghost, Ic404GhostDark, Ic500Back, Ic500Cone, Ic500ConeDark, Ic500Front } from '../assets';
import * as S from '../styles';

interface ErrorCodeProps {
  code: 404 | 500;
}
export default function ErrorCode({ code }: ErrorCodeProps) {
  const isMobile = useIsMobile('428px');
  const isTablet = useIsTablet('428px', '768px');
  const SIZE = {
    height: isTablet ? 89 : 101,
    icon: isTablet ? 140 : 165,
  };

  const codeVariant = {
    initial: { gap: '6px' },
    whileHover: { gap: '159px' },
  };

  const iconVariant = {
    initial: { opacity: 0 },
    whileHover: { opacity: 1 },
  };

  const animationProps = {
    initial : 'initial',
    whileHover : 'whileHover',
    transition : { duration: 0.3 },
  };

  return (
    <S.ErrorCode {...animationProps} variants={codeVariant}>
    {code === 404 ? (
      <>
        {!isMobile && <Ic404Front height={SIZE.height} />}
        <S.ErrorIcon {...animationProps} variants = { iconVariant }>
          {isMobile ? <Ic404GhostDark /> : <Ic404Ghost height={SIZE.icon}/>}   
        </S.ErrorIcon>
        {!isMobile && <Ic404Back height={SIZE.height} />}
      </>) : (
      <>
        {!isMobile && <Ic500Front height={SIZE.height} />}
          <S.ErrorIcon {...animationProps} variants = { iconVariant }>
          {isMobile ? <Ic500ConeDark /> : <Ic500Cone height={SIZE.icon}/>}
        </S.ErrorIcon>
        {!isMobile && <Ic500Back height={SIZE.height} />}
      </>
      )}
    </S.ErrorCode>
  );
}
