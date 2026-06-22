import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import { useQuery } from '@tanstack/react-query';
import { createContext } from 'react';
import PageLayout from '@src/components/common/PageLayout';
import { remoteAdminAPI } from '@src/lib/api/remote/admin';
import { media } from '@src/lib/styles/breakpoints';
import { CoreValueType, GetAboutpageResponse } from '@src/lib/types/admin';
import {
  Banner,
  CoreValueSection,
  CurriculumSection,
  InternalTeams,
  ScheduleSection,
} from '@src/views/AboutPage/components';

const ExecutiveSection = dynamic(() => import('@src/views/AboutPage/components/Executive/Section'));

export const BrandingColorContext = createContext({
  main: '',
});

const AboutPage = () => {
  const { data: adminData } = useQuery<GetAboutpageResponse>({
    queryKey: ['homepage', 'about'],
    queryFn: remoteAdminAPI.getAboutpage,
  });

  if (!adminData) return;

  return (
    <PageLayout>
      <BrandingColorContext.Provider value={adminData.brandingColor}>
        <Banner imageSrc={adminData.headerImage} />
        <Root>
          <CoreValueSection
            mainDescription={`${adminData.generation}기 ${adminData.name}가 함께 나아가고 싶은 사람입니다.`}
            coreValues={adminData.coreValue.map((coreValue: CoreValueType) => ({
              title: coreValue.value,
              description: coreValue.description,
              src: coreValue.image,
            }))}
          />
          <ScheduleSection generation={adminData.generation} schedules={adminData.schedule ?? []} />
          <CurriculumSection curriculums={adminData.partCurriculum} />
          <ExecutiveSection
            members={adminData.member}
            generation={adminData.generation}
            name={adminData.name}
          />
          <InternalTeams />
        </Root>
      </BrandingColorContext.Provider>
    </PageLayout>
  );
};

export default AboutPage;

const Root = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 0 40px 423px 40px;
  gap: 232px;

  ${media.desktopLarge} {
    padding: 0 40px 319px 40px;
  }

  ${media.tablet} {
    padding: 0 20px 334px 20px;
    gap: 100px;
  }

  ${media.mobile} {
    padding: 0 20px 41px 20px;
    gap: 100px;
  }
`;
