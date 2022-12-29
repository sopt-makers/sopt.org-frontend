import { useState, useEffect } from 'react';
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
