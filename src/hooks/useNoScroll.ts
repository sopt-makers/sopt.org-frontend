import { useEffect } from 'react';
import { MenuState } from '@src/components/Header/types';

export default function useNoScroll(isMenuShown: MenuState) {
  useEffect(() => {
    if (isMenuShown === 'open') {
      document.body.style.overflow = 'hidden';
    } else {
      return () => {
        document.body.style.overflow = 'auto';
      };
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuShown]);
}
