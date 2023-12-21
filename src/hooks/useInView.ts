import { useState } from 'react';
import useIntersectionObserver from './useIntersectionObserver';

interface useInViewProps {
  options?: IntersectionObserverInit;
}

function useInView({ options }: useInViewProps = {}) {
  const ref = useIntersectionObserver((entry) => {
    setIsInView(entry.isIntersecting);
  }, options);
  const [isInView, setIsInView] = useState(false);

  return { isInView, ref };
}

export default useInView;
