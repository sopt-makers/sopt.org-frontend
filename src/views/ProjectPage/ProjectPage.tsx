import styled from '@emotion/styled';
import { useState } from 'react';
import { Footer, Header, Layout, ScrollToTopButton } from '@src/components';
import { ProjectCategoryType } from '@src/lib/types/project';
import { mainColor } from '@src/styles/colors';
import { ProjectFilter, ProjectList } from './components';
import useFetch from './hooks/useFetch';

function Projects() {
  const [selectedCategory, setCategory] = useState<ProjectCategoryType>(ProjectCategoryType.ALL);
  const state = useFetch(selectedCategory);

  return (
    <Layout>
      <Header />
      <ScrollToTopButton />
      <Root>
        <Title>프로젝트</Title>
        <ProjectFilter selectedCategory={selectedCategory} setCategory={setCategory} />
        <ProjectList state={state} selectedCategory={selectedCategory} />
      </Root>
      <Footer />
    </Layout>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  min-height: 100vh;
  margin: 0 auto;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    width: 700px;
    margin-top: 90px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 360px;
    margin-top: 90px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  color: ${mainColor.white};
  text-align: center;

  /* 데스크탑 뷰 */
  @media (min-width: 1124px) {
    margin-top: 190px;
    margin-bottom: 54px;
    font-size: 40px;
  }

  /* 태블릿 뷰 */
  @media (max-width: 1123px) {
    margin-top: 70px;
    margin-bottom: 52px;
    font-size: 36px;
  }

  /* 태블릿 뷰 */
  @media (max-width: 765.9px) {
    margin-top: 32px;
    font-size: 20px;
  }
`;

export default Projects;
