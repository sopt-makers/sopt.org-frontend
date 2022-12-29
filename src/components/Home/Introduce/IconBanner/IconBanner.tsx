import Image from 'next/image';
import { Fragment } from 'react';
import Marquee from 'react-fast-marquee';
import { useQuery } from 'react-query';
import { ClipLoader } from 'react-spinners';
import CommonError from '@src/components/common/CommonError';
import ErrorBoundary from '@src/components/common/ErrorBoundary';
import SSRSafeSuspense from '@src/components/common/SSRSafeSuspense';
import { useIsDesktop } from '@src/hooks/useIsDesktop';
import { getMainLogo } from '@src/lib/api';
import * as S from './IconBanner.style';

type LogoImageType = {
  id: number;
  image: string;
};

const IconBanner = () => {
  return (
    <ErrorBoundary
      renderFallback={({ error, reset }) => <CommonError error={error} reset={reset} />}
    >
      <SSRSafeSuspense fallback={<ClipLoader size={50} color={'#ffffff'} />}>
        <Resolved />
      </SSRSafeSuspense>
    </ErrorBoundary>
  );
};

function Resolved() {
  const isDesktop = useIsDesktop();
  const { data } = useQuery('mainLogo', () => getMainLogo(), {
    suspense: true,
  });

  return (
    <Marquee pauseOnHover={true} gradient={false} speed={50}>
      {data?.map((image: LogoImageType) => (
        <Fragment key={image.id}>
          <Image
            key={image.id}
            src={image.image}
            className="main__logo"
            width={isDesktop ? '55px' : '35px'}
            height={isDesktop ? '55px' : '35px'}
            alt="프로덕트 로고"
            blurDataURL={image.image}
            placeholder="blur"
          />
          <S.dummyData size={isDesktop ? '55px' : '35px'} />
        </Fragment>
      ))}
    </Marquee>
  );
}

export default IconBanner;
