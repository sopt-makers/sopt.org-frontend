import { useState } from 'react';
import useIntersectionObserver from './useIntersectionObserver';

interface useInViewProps {
  options?: IntersectionObserverInit;
}

export function useInView({ options }: useInViewProps = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useIntersectionObserver((entry) => {
    setIsInView(entry.isIntersecting);
  }, options);

  return { isInView, ref };
}
export default useInView;
