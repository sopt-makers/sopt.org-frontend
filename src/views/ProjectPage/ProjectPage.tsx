import { css } from '@emotion/react';
import { Suspense, useState } from 'react';
import PageLayout from '@src/components/common/PageLayout';
import Select from '@src/components/common/Select';
import { useIsMobile } from '@src/hooks/useDevice';
import {
  activeProjectCategoryList,
  activeProjectPlatformList,
  projectCategoryLabel,
  projectPlatformLabel,
} from '@src/lib/constants/project';
import { ProjectCategoryType, ProjectPlatformType } from '@src/lib/types/project';
import { ProjectList } from '@src/views/ProjectPage/components/project/ProjectList';
import ProjectListFallback from '@src/views/ProjectPage/components/project/ProjectListFallback';
import RecentProjectList from './components/RecentProjectList';
import S from './styles';

function Projects() {
  const [selectedCategory, setCategory] = useState<ProjectCategoryType>(ProjectCategoryType.ALL);
  const [selectedPlatform, setPlatform] = useState<ProjectPlatformType>(ProjectPlatformType.ALL);
  const isMobile = useIsMobile('899px');

  return (
    <PageLayout
      showScrollTopButton
      moreStyle={css`
        overflow-x: hidden;
      `}
    >
      <S.Root>
        <S.ContentWrapper>
          <RecentProjectList />
          <S.Spacing />
          <S.SectionTitle>SOPT{!isMobile && '에서 진행된'} 프로젝트 둘러보기</S.SectionTitle>
          <S.FilterWrapper>
            <Select
              options={activeProjectCategoryList}
              labels={projectCategoryLabel}
              baseLabel="활동"
              selectedValue={selectedCategory}
              setSelectedValue={setCategory}
              baseValue={ProjectCategoryType.ALL}
            />
            <Select
              options={activeProjectPlatformList}
              labels={projectPlatformLabel}
              baseLabel="플랫폼"
              selectedValue={selectedPlatform}
              setSelectedValue={setPlatform}
              baseValue={ProjectPlatformType.ALL}
            />
          </S.FilterWrapper>
          <Suspense fallback={<ProjectListFallback selectedCategory={selectedCategory} />}>
            <ProjectList selectedCategory={selectedCategory} selectedPlatform={selectedPlatform} />
          </Suspense>
        </S.ContentWrapper>
      </S.Root>
    </PageLayout>
  );
}

export default Projects;
