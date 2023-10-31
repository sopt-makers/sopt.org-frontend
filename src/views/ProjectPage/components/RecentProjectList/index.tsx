import { useIsMobile } from '@src/hooks/useDevice';
import { ProjectCategoryType, ProjectPlatformType } from '@src/lib/types/project';
import useFetch from '../../hooks/useFetch';
import S from '../../styles';
import RecentProjectListCarousel from './Carousel';
import RecentProjectListItem from './Item';

export default function RecentProjectList() {
  const isMobile = useIsMobile();
  const state = useFetch(ProjectCategoryType.ALL, ProjectPlatformType.ALL, 'updatedAt');

  if (state._TAG !== 'OK') return null;

  if (state.data.length === 0) return null;

  return (
    <>
      <S.SectionTitle>최근 출시한 프로젝트</S.SectionTitle>
      {!isMobile && (
        <S.PlaygroundLinkWrapper>
          <span>SOPT에서 출시한 프로젝트가 있으신가요?</span>
          <S.PlaygroundLink href="https://playground.sopt.org" target="_blank">
            릴리즈 소식 알리기
          </S.PlaygroundLink>
        </S.PlaygroundLinkWrapper>
      )}
      <RecentProjectListCarousel>
        {state.data.slice(0, 6).map((d) => (
          <RecentProjectListItem key={d.id} {...d} />
        ))}
      </RecentProjectListCarousel>
    </>
  );
}
