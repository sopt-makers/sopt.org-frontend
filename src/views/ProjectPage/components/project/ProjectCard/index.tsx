import { track } from '@amplitude/analytics-browser';
import { useMediaQuery } from 'react-responsive';
import { ProjectType } from '@src/lib/types/project';
import * as S from './style';

export default function ProjectCard({ project }: { project: ProjectType }) {
  const isMobile = useMediaQuery({ query: '(max-width: 899px)' });

  return (
    <S.ProjectCard href={`/project/${project.id}`} onClick={() => track('click_project_detail')}>
      {!isMobile && (
        <S.ProjectThumbnail
          src={project.thumbnailImage ?? project.logoImage}
          alt="프로젝트 썸네일"
          width={324}
          height={192}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPU0zOtBwACNQES9P3nGQAAAABJRU5ErkJggg=="
        />
      )}
      <S.ProjectContent>
        <S.ProjectHeader>
          {isMobile && (
            <S.ProjectThumbnail
              src={project.logoImage}
              alt="프로젝트 로고"
              width={40}
              height={40}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPU0zOtBwACNQES9P3nGQAAAABJRU5ErkJggg=="
            />
          )}
          <S.ProjectText>
            <S.ProjectTitle>{project.name}</S.ProjectTitle>
            {project.serviceType.map((type, index) => (
              <S.ProjectType key={type}>
                <span>{type}</span>
                {project.serviceType.length - 1 !== index && <S.Divider>∙</S.Divider>}
              </S.ProjectType>
            ))}
          </S.ProjectText>
        </S.ProjectHeader>
        <S.ProjectSummary>{project.summary}</S.ProjectSummary>
      </S.ProjectContent>
      {/* TODO: 서비스 이용 가능 및 창업 정보와 멤버 정보 추가 필요  */}
    </S.ProjectCard>
  );
}
