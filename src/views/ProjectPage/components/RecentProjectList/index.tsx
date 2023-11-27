import { Suspense } from 'react';
import S from '../../styles';
import RecentProjectListCarousel from './Carousel';
import RecentProjectListSkeletonUI from './RecentProjectListSkeletonUI';

export default function RecentProjectList() {
  return (
    <>
      <S.SectionTitle>최근 출시한 프로젝트</S.SectionTitle>
      <S.PlaygroundLinkWrapper>
        <span>SOPT에서 출시한 프로젝트가 있으신가요?</span>
        <S.PlaygroundLink
          href="https://docs.google.com/forms/d/e/1FAIpQLSeJd8uBh2GODm0R3dluTQu_iGmZ7PsKvchNwx7GQZ79CQyrog/viewform?usp=sf_link"
          target="_blank"
        >
          릴리즈 소식 알리기
        </S.PlaygroundLink>
      </S.PlaygroundLinkWrapper>
      <Suspense fallback={<RecentProjectListSkeletonUI />}>
        <RecentProjectListCarousel />
      </Suspense>
    </>
  );
}
