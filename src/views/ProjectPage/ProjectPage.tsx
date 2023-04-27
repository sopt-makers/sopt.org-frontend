import { useState } from 'react';
import { Footer, Header, Layout, ScrollToTopButton } from '@src/components';
import { ProjectCategoryType } from '@src/lib/types/project';
import { ProjectFilter, ProjectList } from './components';
import useFetch from './hooks/useFetch';

function Projects() {
  const [selectedCategory, setCategory] = useState<ProjectCategoryType>(ProjectCategoryType.ALL);
  const state = useFetch(selectedCategory);

  return (
    <Layout>
      <Header />
      <ScrollToTopButton />
      <ProjectFilter selectedCategory={selectedCategory} setCategory={setCategory} />
      <ProjectList state={state} selectedCategory={selectedCategory} />
      <Footer />
    </Layout>
  );
}

export default Projects;
