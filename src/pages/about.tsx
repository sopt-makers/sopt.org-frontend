import styled from '@emotion/styled';
import { InferGetServerSidePropsType } from 'next';
import { lazy } from 'react';
import PageLayout from '@src/components/common/PageLayout';
import { api } from '@src/lib/api';
import {
  Banner,
  CoreValueSection,
  CurriculumSection,
  RecordSection,
} from '@src/views/AboutPage/components';

const MemberSection = lazy(() => import('@src/views/AboutPage/components/Member/Section'));

const AboutPage = ({ aboutInfo }: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <PageLayout>
      <Root>
        <Banner imageSrc={aboutInfo.aboutInfo.bannerImage} title={aboutInfo.aboutInfo.title} />
        <CoreValueSection
          mainDescription={aboutInfo.aboutInfo.coreValue.mainDescription}
          coreValues={aboutInfo.aboutInfo.coreValue.eachValues}
        />
        <CurriculumSection curriculums={aboutInfo.aboutInfo.curriculums} />
        <MemberSection generation={aboutInfo.aboutInfo.generation} />
        <RecordSection
          generation={aboutInfo.aboutInfo.generation}
          records={aboutInfo.aboutInfo.records}
        />
      </Root>
    </PageLayout>
  );
};

export const getStaticProps = async () => {
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
  justify-content: center;
  min-height: 100vh;
`;
