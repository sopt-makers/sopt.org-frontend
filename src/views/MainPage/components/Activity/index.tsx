import { Ref, forwardRef } from 'react';
import Tab from '../Tab';
import ActivityCarousel from './ActivityCarousel';
import * as S from './style';

function Activity(_props: unknown, ref: Ref<HTMLDivElement>) {
  return (
    <S.Wrapper ref={ref} id="activity">
      <Tab
        title={'매 기수 함께하는 다양한 활동!'}
        description={
          'SOPT에는 매 기수마다 정기적으로 진행되는 다양한 활동이 있어요.\n파트원과 친목을 다지고 실력을 함께 쌓으며, 솝트에서의 시간을 더 풍성하게 만들 수 있어요.'
        }
      />
      <ActivityCarousel />
    </S.Wrapper>
  );
}

export default forwardRef(Activity);
