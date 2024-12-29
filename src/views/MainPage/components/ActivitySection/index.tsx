import useInView from '@src/hooks/useInView';
import { PartIntroType } from '@src/lib/types/admin';
import Activity from '@src/views/MainPage/components/Activity';
import OwnOrganization from '@src/views/MainPage/components/OwnOrganization';
import PartConfig from '@src/views/MainPage/components/PartConfig';
import Comment from '../Comment';
import * as S from './style';

interface ActivitySectionProps {
  activityInView: ReturnType<typeof useInView>;
  partInView: ReturnType<typeof useInView>;
  teamInView: ReturnType<typeof useInView>;
  reviewInView: ReturnType<typeof useInView>;
  partIntroduction: PartIntroType[];
}

export default function ActivitySection({
  activityInView,
  partInView,
  teamInView,
  reviewInView,
  partIntroduction,
}: ActivitySectionProps) {
  return (
    <S.Wrapper>
      <Activity ref={activityInView.ref} />
      <PartConfig ref={partInView.ref} partIntroduction={partIntroduction} />
      <OwnOrganization ref={teamInView.ref} />
      <Comment ref={reviewInView.ref} />
    </S.Wrapper>
  );
}
