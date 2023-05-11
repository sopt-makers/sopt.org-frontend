import styled from '@emotion/styled';
import { InferGetServerSidePropsType } from 'next';
import { lazy } from 'react';
import { Footer, Header, Layout } from '@src/components';
import { api } from '@src/lib/api';
import Banner from '@src/views/AboutPage/components/Banner';
import CirriculumSection from '@src/views/AboutPage/components/Cirriculum/Section';
import CoreValueSection from '@src/views/AboutPage/components/CoreValue/Section';
import RecordSection from '@src/views/AboutPage/components/Record/Section';

const MemberSection = lazy(() => import('@src/views/AboutPage/components/Member/Section'));

const AboutPage = ({ aboutInfo }: InferGetServerSidePropsType<typeof getStaticProps >) => {
  return (
    <Layout>
      <Header />
      <Root>
        <Banner imageSrc={aboutInfo.aboutInfo.bannerImage} title={aboutInfo.aboutInfo.title} />
        <CoreValueSection
          mainDescription={aboutInfo.aboutInfo.coreValue.mainDescription}
          coreValues={aboutInfo.aboutInfo.coreValue.eachValues}
        />
        <CirriculumSection cirriculums={aboutInfo.aboutInfo.curriculums} />
        <RecordSection
          generation={aboutInfo.aboutInfo.generation}
          records={aboutInfo.aboutInfo.records}
        />
        <MemberSection generation={aboutInfo.aboutInfo.generation} />
      </Root>
      <Footer />
    </Layout>
  );
};

export const getStaticProps  = async () => {
  const aboutInfo = await api.aboutAPI.getAboutInfo();

  return {
    props: {
      aboutInfo,
    },
  };
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
