import { ProjectType } from '@src/lib/types/project';
import ProjectCard from '@src/views/ProjectPage/components/project/ProjectCard';
import * as S from './style';

interface ProjectCardList {
  projectList: ProjectType[];
}

export default function ProjectCardList({ projectList }: ProjectCardList) {
  return (
    <S.CardList>
      {projectList.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </S.CardList>
  );
}
