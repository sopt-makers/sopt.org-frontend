import { useState } from 'react';
import PageLayout from '@src/components/common/PageLayout';
import { ProjectCategoryType } from '@src/lib/types/project';
import { ProjectFilter, ProjectList } from './components';
import useFetch from './hooks/useFetch';

function Projects() {
  const [selectedCategory, setCategory] = useState<ProjectCategoryType>(ProjectCategoryType.ALL);
  const state = useFetch(selectedCategory);

  return (
    <PageLayout showScrollTopButton>
      <ProjectFilter selectedCategory={selectedCategory} setCategory={setCategory} />
      <ProjectList state={state} selectedCategory={selectedCategory} />
    </PageLayout>
  );
}

export default Projects;
