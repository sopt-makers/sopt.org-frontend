import { BASE_URL, DEFAULT_TIMEOUT } from '@src/lib/constants/client';
import { GetAboutInfoResponse, GetMembersInfoResponse } from '@src/lib/types/about';
import { CoreValueResponseDto } from '@src/lib/types/dto';
import { Part } from '@src/lib/types/universal';
import axios from 'axios';
import { mockAboutAPI } from '../mock/about';

const client = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
});

const CURRENT_GENERATION = 35;

const getAboutInfo = async (): Promise<GetAboutInfoResponse> => {
  const { data: dataCurrent } = await client.get(`/aboutsopt?generation=${CURRENT_GENERATION}`);
  // const { data: dataPrev } = await client.get(`/aboutsopt?generation=${CURRENT_GENERATION - 1}`);

  return {
    aboutInfo: {
      generation: dataCurrent.aboutSopt.id,
      title: dataCurrent.aboutSopt.title,
      bannerImage: dataCurrent.aboutSopt.bannerImage,
      coreValue: {
        mainDescription: dataCurrent.aboutSopt.coreDescription,
        eachValues: dataCurrent.aboutSopt.coreValues.map((coreValue: CoreValueResponseDto) => ({
          title: coreValue.title,
          description: coreValue.subTitle,
          src: coreValue.imageUrl,
        })),
      },
      curriculums: {
        [Part.PLAN]: dataCurrent.aboutSopt.planCurriculum,
        [Part.DESIGN]: dataCurrent.aboutSopt.designCurriculum,
        [Part.ANDROID]: dataCurrent.aboutSopt.androidCurriculum,
        [Part.IOS]: dataCurrent.aboutSopt.iosCurriculum,
        [Part.SERVER]: dataCurrent.aboutSopt.serverCurriculum,
        [Part.WEB]: dataCurrent.aboutSopt.webCurriculum,
      },
      records: {
        memberCount: dataCurrent.activitiesRecords.activitiesMemberCount,
        projectCount: dataCurrent.activitiesRecords.projectCounts,
        studyCount: dataCurrent.activitiesRecords.studyCounts,
      },
    },
  };
};

const getMemberInfo = async (): Promise<GetMembersInfoResponse> => {
  return mockAboutAPI.getMemberInfo(); // todo : implement server connection
};

export const remoteAboutAPI = {
  getAboutInfo,
  getMemberInfo,
};
