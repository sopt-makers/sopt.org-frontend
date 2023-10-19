import { useState } from 'react';
import PageLayout from '@src/components/common/PageLayout';
import Select from '@src/components/common/Select';
import { activeProjectCategoryList, projectCategoryLabel } from '@src/lib/constants/project';
import { ProjectCategoryType } from '@src/lib/types/project';
import { ProjectList } from './components';
import useFetch from './hooks/useFetch';
import { ContentWrapper, Root, SectionTitle } from './styles';

function Projects() {
  const [selectedCategory, setCategory] = useState<ProjectCategoryType>(ProjectCategoryType.ALL);
  const state = useFetch(selectedCategory);

  return (
    <PageLayout showScrollTopButton>
      <Root>
        <ContentWrapper>
          <SectionTitle>SOPT에서 진행된 프로젝트 둘러보기</SectionTitle>
          <Select
            options={activeProjectCategoryList}
            labels={projectCategoryLabel}
            baseLabel="활동"
            selectedValue={selectedCategory}
            setSelectedValue={setCategory}
            baseValue={ProjectCategoryType.ALL}
          />
          <ProjectList
            state={state}
            selectedCategory={selectedCategory ?? ProjectCategoryType.ALL}
          />
        </ContentWrapper>
      </Root>
    </PageLayout>
  );
}

export default Projects;
