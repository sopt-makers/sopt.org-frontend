import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Header, Footer, Layout } from '@src/components';
import { DesktopFilter, MobileFilter, ProjectList } from './components';
import { ProjectCategoryType } from './lib/constants';
import { Condition } from '@src/lib';

import useFetch from './hooks/useFetch';

function Projects() {
  const [selectedCategory, setCategory] = useState<ProjectCategoryType>(ProjectCategoryType.ALL);
  const state = useFetch(selectedCategory);

  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  const isMobile = !isDesktop;

  return (
    <Layout>
      <Header />
      <Condition statement={isDesktop}>
        <DesktopFilter selectedCategory={selectedCategory} setCategory={setCategory} />
      </Condition>
      <Condition statement={isMobile}>
        <MobileFilter selectedCategory={selectedCategory} setCategory={setCategory} />
      </Condition>
      <ProjectList state={state} selectedCategory={selectedCategory} />
      <Footer />
    </Layout>
  );
}

export default Projects;
