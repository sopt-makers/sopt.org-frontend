import { useState, useEffect } from 'react';

const useScroll = () => {
  const [state, setState] = useState({
    y: 0,
  });
  const [isScrollDown, setScrollIsDown] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      setScrollIsDown(state.y < window.scrollY);
      setState({ y: window.scrollY });
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [state]);

  return isScrollDown;
};

export default useScroll;
