import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export function useIsDesktop(minWidth = '1920px') {
  const [isDesktop, setIsDesktop] = useState(true);
  const desktop = useMediaQuery({
    query: `(min-width: ${minWidth})`,
  });
  useEffect(() => {
    setIsDesktop(desktop);
  }, [desktop]);
  return isDesktop;
}

export function useIsTablet(minWidth = '766px', maxWidth = '1919px') {
  const [isTablet, setIsTablet] = useState(true);
  const tablet = useMediaQuery({
    query: `(min-width: ${minWidth}) and (max-width: ${maxWidth})`,
  });
  useEffect(() => {
    setIsTablet(tablet);
  }, [tablet]);
  return isTablet;
}

export function useIsMobile(maxWidth = '765px') {
  const [isMobile, setIsMobile] = useState(true);
  const mobile = useMediaQuery({
    query: `(max-width:${maxWidth})`,
  });
  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);
  return isMobile;
}
