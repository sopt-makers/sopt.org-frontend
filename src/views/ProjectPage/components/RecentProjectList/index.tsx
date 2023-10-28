import { ProjectCategoryType } from '@src/lib/types/project';
import useFetch from '../../hooks/useFetch';
import S from '../../styles';
import RecentProjectListCarousel from './Carousel';
import RecentProjectListItem from './Item';

export default function RecentProjectList() {
  const state = useFetch(ProjectCategoryType.ALL, 'updatedAt');

  if (state._TAG !== 'OK') return null;

  if (state.data.length === 0) return null;

  return (
    <>
      <S.SectionTitle>최근 출시한 프로젝트</S.SectionTitle>
      <RecentProjectListCarousel>
        {state.data.slice(0, 6).map((d) => (
          <RecentProjectListItem key={d.id} {...d} />
        ))}
      </RecentProjectListCarousel>
    </>
  );
}
