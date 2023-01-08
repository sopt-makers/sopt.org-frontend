import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export function useIsDesktop(minWidth = '1280px') {
  const [isDesktop, setIsDesktop] = useState(true);
  const desktop = useMediaQuery({
    query: `(min-width: ${minWidth})`,
  });
  useEffect(() => {
    setIsDesktop(desktop);
  }, [desktop]);
  return isDesktop;
}

export function useIsTablet(minWidth = '766px', maxWidth = '1280px') {
  const [isTablet, setIsTablet] = useState(true);
  const tablet = useMediaQuery({
    query: `(min-width: ${minWidth}), max-width:${maxWidth}`,
  });
  useEffect(() => {
    setIsTablet(tablet);
  }, [tablet]);
  return isTablet;
}
