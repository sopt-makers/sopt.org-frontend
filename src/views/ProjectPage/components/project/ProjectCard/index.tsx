import { track } from '@amplitude/analytics-browser';
import { ProjectType } from '@src/lib/types/project';
import * as S from './style';

export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <S.ProjectCard href={`/project/${project.id}`} onClick={() => track('click_project_detail')}>
      <S.ProjectThumbnail
        src={project.thumbnailImage ?? project.logoImage}
        alt="프로젝트 썸네일"
        width={324}
        height={192}
      />
      <S.ProjectContent>
        <S.ProjectHeader>
          <S.ProjectTitle>{project.name}</S.ProjectTitle>
          {project.serviceType.map((type, index) => (
            <S.ProjectType key={type}>
              <span>{type}</span>
              {project.serviceType.length - 1 !== index && <S.Divider>∙</S.Divider>}
            </S.ProjectType>
          ))}
        </S.ProjectHeader>
        <S.ProjectSummary>{project.summary}</S.ProjectSummary>
      </S.ProjectContent>
      {/* TODO: 서비스 이용 가능 및 창업 정보와 멤버 정보 추가 필요  */}
    </S.ProjectCard>
  );
}
