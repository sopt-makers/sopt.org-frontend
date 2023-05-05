import styled from '@emotion/styled';
import { lazy } from 'react';
import { Footer, Header, Layout } from '@src/components';
import Banner from './components/Banner';
import CirriculumSection from './components/Cirriculum/Section';
import CoreValueSection from './components/CoreValue/Section';
import RecordSection from './components/Record/Section';
import useFetch from './hooks/useFetch';

const MemberSection = lazy(() => import('./components/Member/Section'));

const AboutPage = () => {
  const state = useFetch();

  return (
    <Layout>
      <Header />
      <Root>
        {state._TAG === 'OK' && (
          <>
            <Banner
              imageSrc={state.data.aboutInfo.bannerImage}
              title={state.data.aboutInfo.title}
            />
            <CoreValueSection
              mainDescription={state.data.aboutInfo.coreValue.mainDescription}
              coreValues={state.data.aboutInfo.coreValue.eachValues}
            />
            <CirriculumSection cirriculums={state.data.aboutInfo.curriculums} />
            <RecordSection
              generation={state.data.aboutInfo.generation}
              records={state.data.aboutInfo.records}
            />
            <MemberSection generation={state.data.aboutInfo.generation} />
          </>
        )}
      </Root>
      <Footer />
    </Layout>
  );
};

export default AboutPage;

const Root = styled.main`
  display: flex;
  flex-direction: column;
  gap: 180px;
  width: 1200px;
  min-height: 100vh;
  margin: 0 auto;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    width: 667px;
    gap: 140px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 332px;
    gap: 80px;
  }
`;
