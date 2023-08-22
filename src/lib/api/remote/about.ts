import {
  GetAboutInfoResponse,
  GetMembersInfoResponse,
  GetStudyInfoResponse,
} from '@src/lib/types/about';
import { CoreValueResponseDto, MemberResponseDto, StudyResponseDto } from '@src/lib/types/dto';
import { Part } from '@src/lib/types/universal';
import { BASE_URL, DEFAULT_TIMEOUT } from '@src/utils/const/client';
import { parseStringToPart } from '@src/utils/parseStringToPart';
import axios from 'axios';
import qs from 'qs';

const client = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
});

const CURRENT_GENERATION = 33;

const getAboutInfo = async (): Promise<GetAboutInfoResponse> => {
  const { data: dataCurrent } = await client.get(`/aboutsopt?generation=${CURRENT_GENERATION}`);
  const { data: dataPrev } = await client.get(`/aboutsopt?generation=${CURRENT_GENERATION - 1}`);

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
        memberCount: dataPrev.activitiesRecords.activitiesMemberCount,
        projectCount: dataPrev.activitiesRecords.projectCounts,
        studyCount: dataPrev.activitiesRecords.studyCounts,
      },
    },
  };
};

const partToFilterParam: Record<Part, number> = {
  PLAN: 1,
  DESIGN: 2,
  WEB: 3,
  SERVER: 4,
  ANDROID: 5,
  iOS: 6,
};

const getMemberInfoParams = (part?: Part): { filter?: number; generation: number } => {
  const generation = 32;

  if (!part) return { generation };

  const filter = partToFilterParam[part];

  return { filter, generation };
};

const getMemberInfo = async (part?: Part): Promise<GetMembersInfoResponse> => {
  const parameter = qs.stringify(getMemberInfoParams(part));

  const {
    data: { members },
  } = await client.get<{ members: MemberResponseDto[] }>(`/member?${parameter}`);

  return {
    members: members
      .filter((member) => member.name && member.part)
      .map((member) => ({
        id: member.id,
        name: member.name,
        description: member.introduction,
        part: member.part,
        src: member.profileImage,
      })),
  };
};

const getStudyInfo = async (): Promise<GetStudyInfoResponse> => {
  const { data } = await client.get<StudyResponseDto[]>('/study');

  return {
    studies: data.map((study: StudyResponseDto) => ({
      id: study.id,
      generation: study.generation,
      joinableParts: study.parts.map((part) => parseStringToPart(part)),
      title: study.title,
      src: study.imageUrl,
      startDate: new Date(study.startDate),
      endDate: new Date(study.endDate),
      membersCount: study.memberCount,
    })),
    hasNextPage: true,
  };
};

export const remoteAboutAPI = {
  getAboutInfo,
  getMemberInfo,
  getStudyInfo,
};
