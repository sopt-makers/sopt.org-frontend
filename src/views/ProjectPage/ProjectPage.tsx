import { useState } from 'react';
import { Header, Footer, Layout } from '@src/components';
import { ProjectFilter, ProjectList } from './components';
import { ProjectCategoryType } from './lib/constants';
import useFetch from './hooks/useFetch';

function Projects() {
  const [selectedCategory, setCategory] = useState<ProjectCategoryType>(ProjectCategoryType.ALL);
  const state = useFetch(selectedCategory);

  return (
    <Layout>
      <Header />
      <ProjectFilter selectedCategory={selectedCategory} setCategory={setCategory} />
      <ProjectList state={state} selectedCategory={selectedCategory} />
      <Footer />
    </Layout>
  );
}

export default Projects;
