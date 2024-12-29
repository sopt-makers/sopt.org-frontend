import styled from '@emotion/styled';
import { InferGetServerSidePropsType } from 'next';
import dynamic from 'next/dynamic';
import PageLayout from '@src/components/common/PageLayout';
import { api } from '@src/lib/api';
import {
  Banner,
  CoreValueSection,
  CurriculumSection,
  RecordSection,
} from '@src/views/AboutPage/components';

const MemberSection = dynamic(() => import('@src/views/AboutPage/components/Member/Section'));

const AboutPage = ({ aboutInfo }: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <PageLayout>
      <Root>
        <Banner imageSrc={aboutInfo.bannerImage} title={aboutInfo.title} />
        <CoreValueSection
          mainDescription={aboutInfo.coreValue.mainDescription}
          coreValues={aboutInfo.coreValue.eachValues}
        />
        <CurriculumSection curriculums={aboutInfo.curriculums} />
        <MemberSection members={aboutInfo.members} generation={aboutInfo.generation} />
        <RecordSection generation={aboutInfo.generation} records={aboutInfo.records} />
      </Root>
    </PageLayout>
  );
};

export const getStaticProps = async () => {
  const aboutInfo = await api.aboutAPI.getAboutInfo();

  return {
    props: aboutInfo,
    revalidate: 120,
  };
};

export default AboutPage;

const Root = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;
