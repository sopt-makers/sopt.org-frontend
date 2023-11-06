import * as S from './style';

export default function ProjectCardSkeletonUI() {
  const array = new Array(9).fill(0);

  return (
    <S.CardList>
      {array.map((_, index) => (
        <S.ProjectCard key={index}>
          <S.ProjectThumbnail />
          <S.ProjectContent>
            <S.ProjectHeader>
              <S.ProjectLogo />
              <S.ProjectText>
                <S.ProjectTitle />
                <S.ProjectType />
              </S.ProjectText>
            </S.ProjectHeader>
            <S.ProjectSummary />
          </S.ProjectContent>
        </S.ProjectCard>
      ))}
    </S.CardList>
  );
}
