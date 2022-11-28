import CommonError from '@src/components/common/CommonError';
import ErrorBoundary from '@src/components/common/ErrorBoundary';
import SSRSafeSuspense from '@src/components/common/SSRSafeSuspense';
import { getHistoryDetailData } from '@src/lib/api';
import { seperateLeaderType } from '@src/utils/history';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { ClipLoader } from 'react-spinners';

import Sidebar from '../Sidebar/Sidebar';
import * as S from './DetailMain.style';

const DetailMain = () => {
  return (
    <ErrorBoundary
      renderFallback={({ error, reset }) => <CommonError error={error} reset={reset} />}
    >
      {/*  TODO skeleton 추가 */}
      <SSRSafeSuspense fallback={<ClipLoader size={50} color={'#ffffff'} />}>
        <Resolved />
      </SSRSafeSuspense>
    </ErrorBoundary>
  );
};

function Resolved() {
  const router = useRouter();

  const id = router?.query?.id;
  const { data } = useQuery(['history', id], () => getHistoryDetailData(id), {
    suspense: true,
  });
  const { secondSection, thirdSection } = seperateLeaderType(data?.data?.leaders);
  const firstSection = {
    id: 0,
    part: `${id}기 THE SOPT`,
  };

  return (
    <S.Root>
      <Sidebar
        firstSection={firstSection}
        secondSection={secondSection}
        thirdSection={thirdSection}
      />{' '}
    </S.Root>
  );
}

export default DetailMain;
