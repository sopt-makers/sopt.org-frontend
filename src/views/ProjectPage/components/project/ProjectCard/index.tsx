import { track } from '@amplitude/analytics-browser';
import { ProjectType } from '@src/lib/types/project';
import ServiceInfo from '@src/views/ProjectPage/components/project/ProjectCard/ServiceInfo';
import * as S from './style';

export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <S.ProjectCard href={`/project/${project.id}`} onClick={() => track('click_project_detail')}>
      <S.ProjectThumbnail
        src={project.thumbnailImage ?? project.logoImage}
        alt="프로젝트 썸네일"
        width={324}
        height={192}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPU0zOtBwACNQES9P3nGQAAAABJRU5ErkJggg=="
        unoptimized
      />
      <S.ProjectHeader>
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
      <S.ProjectDetail>
        <S.ServiceDetail>
          {project.isAvailable && <ServiceInfo text="서비스 이용 가능" />}
          {project.isFounding && <ServiceInfo text="창업 중" />}
        </S.ServiceDetail>
        {/* TODO: 멤버 정보 추가 필요  */}
      </S.ProjectDetail>
    </S.ProjectCard>
  );
}
