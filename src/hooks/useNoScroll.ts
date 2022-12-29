import { MenuType } from '@src/components/Header/Mobile/MobileHeader';
import { useEffect } from 'react';

export default function useNoScroll(isMenuShown: MenuType) {
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
