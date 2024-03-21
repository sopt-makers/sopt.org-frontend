import { forwardRef } from 'react';
import Activity from '@src/views/MainPage/components/Activity';
import OwnOrganization from '@src/views/MainPage/components/OwnOrganization';
import PartConfig from '@src/views/MainPage/components/PartConfig';
import * as S from './style';

function ActivitySection(_props: unknown, ref: React.Ref<HTMLDivElement>) {
  return (
    <S.Wrapper ref={ref}>
      <Activity />
      <PartConfig />
      <OwnOrganization />
    </S.Wrapper>
  );
}

export default forwardRef(ActivitySection);
