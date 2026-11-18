import { api } from '@src/lib/api/instance';
import { GetAboutInfoResponse } from '@src/lib/types/about';
import { CoreValueType } from '@src/lib/types/admin';
import { remoteAdminAPI } from './admin';

const getAboutInfo = async (): Promise<GetAboutInfoResponse> => {
  const dataCurrent = await remoteAdminAPI.getAboutpage();
  // TODO: 기존 API 의존성 떼기
  const { data: dataPrev } = await api.get(`/aboutsopt?generation=${dataCurrent.generation - 1}`);

  return {
    aboutInfo: {
      generation: dataCurrent.generation,
      title: dataCurrent.name,
      brandingColor: dataCurrent.brandingColor,
      bannerImage: dataCurrent.headerImage,
      coreValue: {
        mainDescription: `${dataCurrent.generation}기 ${dataCurrent.name}가 함께 나아가고 싶은 사람입니다.`,
        eachValues: dataCurrent.coreValue.map((coreValue: CoreValueType) => ({
          title: coreValue.value,
          description: coreValue.description,
          src: coreValue.image,
        })),
      },
      curriculums: dataCurrent.partCurriculum,
      records: {
        memberCount: dataPrev.activitiesRecords.activitiesMemberCount,
        projectCount: dataPrev.activitiesRecords.projectCounts,
        studyCount: dataPrev.activitiesRecords.studyCounts,
      },
      members: dataCurrent.member,
    },
  };
};

export const remoteAboutAPI = {
  getAboutInfo,
};
