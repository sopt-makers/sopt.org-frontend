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

  return (
    <S.ErrorCode>
    {code === 404 ? (
      <>
        {!isMobile && <Ic404Front height={SIZE.height} />}
        {isMobile ? <Ic404GhostDark /> : <Ic404Ghost height={SIZE.icon}/>}
        {!isMobile && <Ic404Back height={SIZE.height} />}
      </>) : (
      <>
        {!isMobile && <Ic500Front height={SIZE.height} />}
        {isMobile ? <Ic500ConeDark /> : <Ic500Cone height={SIZE.icon}/>}
        {!isMobile && <Ic500Back height={SIZE.height} />}
      </>
      )}
    </S.ErrorCode>
  );
}
