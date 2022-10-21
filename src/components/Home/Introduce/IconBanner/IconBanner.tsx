import CommonError from '@src/components/common/CommonError';
import ErrorBoundary from '@src/components/common/ErrorBoundary';
import SSRSafeSuspense from '@src/components/common/SSRSafeSuspense';
import { getMainLogo } from '@src/lib/api';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { useQuery } from 'react-query';
import { useMediaQuery } from 'react-responsive';
import { ClipLoader } from 'react-spinners';

import * as S from './IconBanner.style';
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
  // const isDesktop = useMediaQuery({
  //   query: '(min-width: 1280px)',
  // });
  // const { data } = useQuery('mainLogo', () => getMainLogo(), {
  //   suspense: true,
  // });

  return (
    <Marquee pauseOnHover={true} gradient={false} speed={50}>
      {/* {data?.data?.map((imgSrc: any) => (
        <>
          <Image
            key={imgSrc.id}
            src={imgSrc.image}
            className="main__logo"
            width={isDesktop ? '55px' : '35px'}
            height={isDesktop ? '55px' : '35px'}
            alt="프로덕트 로고"
            blurDataURL={imgSrc.image}
            placeholder="blur"
          />
          <S.dummyData size={isDesktop ? '55px' : '35px'} />
        </>
      ))} */}
    </Marquee>
  );
}

export default IconBanner;
