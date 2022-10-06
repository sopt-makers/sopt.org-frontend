import CommonError from '@src/components/common/CommonError';
import ErrorBoundary from '@src/components/common/ErrorBoundary';
import SSRSafeSuspense from '@src/components/common/SSRSafeSuspense';
import { getAllHistoryData } from '@src/lib/api';
import React, { Dispatch, useEffect } from 'react';
import { useQuery } from 'react-query';
import { ClipLoader } from 'react-spinners';

import HistoryCard from '../HistoryCard/HistoryCard';
import * as S from './HistoryList.style';

interface HistoryListProps {
  page: number;
  limit: number;
  setTotal: Dispatch<React.SetStateAction<number>>;
}

interface SemestersType {
  id: number;
  color?: string;
  logo?: string;
  year: string;
  background?: string;
  name?: string;
}

interface dataType {
  status: number;
  message: string;
  data: {
    limit: number;
    page: number;
    total: number;
    semesters: Array<SemestersType>;
  };
}

const HistoryList = ({ page, limit, setTotal }: HistoryListProps) => {
  return (
    <ErrorBoundary
      renderFallback={({ error, reset }) => <CommonError error={error} reset={reset} />}
    >
      {/*  TODO skeleton 추가 */}
      <SSRSafeSuspense fallback={<ClipLoader size={50} color={'#ffffff'} />}>
        <Resolved page={page} limit={limit} setTotal={setTotal} />
      </SSRSafeSuspense>
    </ErrorBoundary>
  );
};

function Resolved({ page, limit, setTotal }: HistoryListProps) {
  const { data } = useQuery<dataType>(
    ['history', page, limit],
    () => getAllHistoryData(page, limit),
    {
      suspense: true,
    },
  );

  useEffect(() => {
    data?.data.total && setTotal(data?.data.total);
  }, [data?.data.total, setTotal]);

  return (
    <S.UL>
      {data?.data?.semesters?.map((item) => (
        <HistoryCard
          backgroundImage={item.background}
          mainColor={item.color}
          mainLogo={item.logo}
          number={item.id}
          year={item.year}
          key={item.id}
        />
      ))}
    </S.UL>
  );
}

export default HistoryList;
