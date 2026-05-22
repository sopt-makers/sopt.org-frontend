import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '@src/lib/styles/breakpoints';

export function useIsDesktop(minWidth = '1920px') {
  const [isDesktop, setIsDesktop] = useState(false);
  const desktop = useMediaQuery({
    query: `(min-width: ${minWidth})`,
  });
  useEffect(() => {
    setIsDesktop(desktop);
  }, [desktop]);
  return isDesktop;
}

export function useIsTablet(minWidth = '47.875rem', maxWidth = '1919.9px') {
  const [isTablet, setIsTablet] = useState(false);
  const tablet = useMediaQuery({
    query: `(min-width: ${minWidth}) and (max-width: ${maxWidth})`,
  });
  useEffect(() => {
    setIsTablet(tablet);
  }, [tablet]);
  return isTablet;
}

export function useIsDesktopLarge(minWidth = `${breakpoints.desktopLarge}px`) {
  const [isDesktopLarge, setIsDesktopLarge] = useState(false);

  const desktopLarge = useMediaQuery({
    query: `(min-width: ${minWidth})`,
  });

  useEffect(() => {
    setIsDesktopLarge(desktopLarge);
  }, [desktopLarge]);

  return isDesktopLarge;
}

export function useIsMobile(maxWidth = '47.86875rem') {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({
    query: `(max-width:${maxWidth})`,
  });
  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);
  return isMobile;
}

type DeviceType = 'desktop' | 'iOS' | 'Android';

export function useDeviceType() {
  const [deviceType, setDeviceType] = useState<DeviceType | undefined>('desktop');

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/iPad|iPhone|iPod/.test(userAgent)) {
      setDeviceType('iOS');
    } else if (/android/i.test(userAgent)) {
      setDeviceType('Android');
    } else {
      setDeviceType('desktop');
    }
  }, []);

  return deviceType;
}
