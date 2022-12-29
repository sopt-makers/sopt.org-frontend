import React, { ComponentProps, Suspense } from 'react';
import useMounted from '@src/hooks/useMounted';

export default function SSRSafeSuspense(props: ComponentProps<typeof Suspense>) {
  const isMounted = useMounted();

  if (isMounted) {
    return <Suspense {...props} />;
  }

  return <>{props.fallback}</>;
}
