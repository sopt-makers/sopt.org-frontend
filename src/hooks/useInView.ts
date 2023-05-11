import { useState } from 'react';
import useIntersectionObserver from './useIntersectionObserver';

function useInView() {
  const ref = useIntersectionObserver(() => setIsInView(true));
  const [isInView, setIsInView] = useState(false);

  return { isInView, ref };
}

export default useInView;
