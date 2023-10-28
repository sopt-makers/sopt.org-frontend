import { ProjectType } from '@src/lib/types/project';
import { OvalSpinner } from '@src/views/ProjectPage/components/common/OvalSpinner';
import ProjectCard from '@src/views/ProjectPage/components/project/ProjectCard';
import { useInfiniteScroll } from '@src/views/ProjectPage/hooks/useInfiniteScroll';
import * as S from './style';

interface ProjectCardList {
  projectList: ProjectType[];
}

export default function ProjectCardList({ projectList }: ProjectCardList) {
  const { data, isNextPage, ref } = useInfiniteScroll(projectList);

  return (
    <>
      <S.CardList>
        {data.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </S.CardList>
      {isNextPage && (
        <div ref={ref}>
          <div>
            <OvalSpinner />
          </div>
        </div>
      )}
    </>
  );
}
