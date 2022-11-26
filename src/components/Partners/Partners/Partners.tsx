import CommonError from '@src/components/common/CommonError';
import ErrorBoundary from '@src/components/common/ErrorBoundary';
import SSRSafeSuspense from '@src/components/common/SSRSafeSuspense';
import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import PartnerCard from '@src/components/Partners/Partners/PartnerCard';
import { getCooperationPartner, getCooperationProject } from '@src/lib/api';
import { useQuery } from 'react-query';
import { ClipLoader } from 'react-spinners';

import * as S from './Partners.style';

interface PartnerType {
  id: string;
  name: string;
  image: string;
}

const Partners = () => {
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
  const { data } = useQuery('partner', () => getCooperationPartner(), {
    suspense: true,
  });

  return (
    <S.Root>
      <UnderlinedTitle>PARTNERS</UnderlinedTitle>
      <S.Description>다양한 기업 및 단체에서 SOPT를 위해 후원하고 있습니다.</S.Description>
      <S.PartnerWrap>
        {data?.map((item: PartnerType) => (
          <PartnerCard key={item.id} posterImage={item.image} name={item.name} />
        ))}
      </S.PartnerWrap>
    </S.Root>
  );
}

export default Partners;
