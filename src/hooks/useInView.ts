import { useCallback, useEffect, useState } from 'react';

function useInView(element: React.RefObject<HTMLElement>, padding = 0) {
  const [isInView, setIsInView] = useState(false);
  const onScroll = useCallback(() => {
    const windowHeight = window.innerHeight;
    const elementTop = element.current?.getBoundingClientRect().top ?? 0;

    setIsInView(elementTop > padding && elementTop < windowHeight - padding);
  }, [element, padding]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return { isInView };
}

export default useInView;
