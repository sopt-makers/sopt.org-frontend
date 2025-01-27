import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import { useQuery } from '@tanstack/react-query';
import { createContext } from 'react';
import PageLayout from '@src/components/common/PageLayout';
import { remoteAdminAPI } from '@src/lib/api/remote/admin';
import { CoreValueType, GetAboutpageResponse } from '@src/lib/types/admin';
import {
  Banner,
  CoreValueSection,
  CurriculumSection,
  RecordSection,
} from '@src/views/AboutPage/components';

const MemberSection = dynamic(() => import('@src/views/AboutPage/components/Member/Section'));

export const BrandingColorContext = createContext({
  main: '',
  low: '',
  high: '',
  point: '',
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
        <Root>
          <Banner imageSrc={adminData.headerImage} />
          <CoreValueSection
            mainDescription={`${adminData.generation}기 ${adminData.name}가 함께 나아가고 싶은 사람입니다.`}
            coreValues={adminData.coreValue.map((coreValue: CoreValueType) => ({
              title: coreValue.value,
              description: coreValue.description,
              src: coreValue.image,
            }))}
          />
          <CurriculumSection curriculums={adminData.partCurriculum} />
          <MemberSection
            members={adminData.member}
            generation={adminData.generation}
            name={adminData.name}
          />
          <RecordSection
            generation={adminData.generation}
            activitiesRecords={adminData.activitiesRecords}
          />
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
`;
