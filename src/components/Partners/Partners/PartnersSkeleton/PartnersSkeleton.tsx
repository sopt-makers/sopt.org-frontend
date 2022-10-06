import 'react-loading-skeleton/dist/skeleton.css';

import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import Skeleton from 'react-loading-skeleton';

import * as S from '../Partners.style';

function PartnersSkeleton() {
  return (
    <S.Root>
      <UnderlinedTitle>PARTNERS</UnderlinedTitle>
      <S.Description>다양한 기업 및 단체에서 SOPT를 위해 후원하고 있습니다.</S.Description>
      <S.PartnerWrap>
        <Skeleton />
      </S.PartnerWrap>
    </S.Root>
  );
}

export default PartnersSkeleton;
