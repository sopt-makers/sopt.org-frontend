import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Header, Footer, Layout } from '@src/components';
import { DesktopFilter, MobileFilter, ProjectList } from './components';
import { SelectionType } from './lib/constants';
import { Condition } from '@src/lib';

function Projects() {
  const [selectedCategory, setCategory] = useState<SelectionType>('NO_SELECT');
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
      <ProjectList selectedCategory={selectedCategory} />
      <Footer />
    </Layout>
  );
}

export default Projects;
