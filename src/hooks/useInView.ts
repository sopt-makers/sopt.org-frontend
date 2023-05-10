import { useCallback, useEffect, useState } from 'react';

function useInView(element: React.RefObject<HTMLElement>, padding = 0) {
  const getIsInView = useCallback(() => {
    const windowHeight = window.innerHeight;
    const elementTop = element.current?.getBoundingClientRect().top ?? 0;
    return elementTop > padding && elementTop < windowHeight - padding;
  }, [element, padding]);
  const [isInView, setIsInView] = useState(getIsInView());

  const onScroll = useCallback(() => {
    setIsInView(getIsInView());
  }, [getIsInView]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return { isInView };
}

export default useInView;
