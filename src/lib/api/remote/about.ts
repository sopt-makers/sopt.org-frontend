import {
  GetAboutInfoResponse,
  GetMembersInfoResponse,
  GetStudyInfoResponse,
} from '@src/lib/types/about';
import {
  CoreValueResponseDto,
  MemberResponseDto,
  Parts,
  StudyResponseDto,
} from '@src/lib/types/dto';
import { Part } from '@src/lib/types/universal';
import { BASE_URL, DEFAULT_TIMEOUT } from '@src/utils/const/client';
import axios from 'axios';
import qs from 'qs';

const client = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
});

const getAboutInfo = async (): Promise<GetAboutInfoResponse> => {
  const { data } = await client.get('/aboutsopt');

  return {
    aboutInfo: {
      generation: data.aboutSopt.id,
      title: data.aboutSopt.title,
      bannerImage: data.aboutSopt.bannerImage,
      coreValue: {
        mainDescription: data.aboutSopt.coreDescription,
        eachValues: data.aboutSopt.coreValues.map((coreValue: CoreValueResponseDto) => ({
          title: coreValue.title,
          description: coreValue.subTitle,
          src: coreValue.imageUrl,
        })),
      },
      curriculums: {
        [Part.PLAN]: data.aboutSopt.planCurriculum,
        [Part.DESIGN]: data.aboutSopt.designCurriculum,
        [Part.ANDROID]: data.aboutSopt.androidCurriculum,
        [Part.IOS]: data.aboutSopt.iosCurriculum,
        [Part.SERVER]: data.aboutSopt.serverCurriculum,
        [Part.WEB]: data.aboutSopt.webCurriculum,
      },
      records: {
        memberCount: data.activitiesRecords.activitiesMemberCount,
        projectCount: data.activitiesRecords.projectCounts,
        studyCount: data.activitiesRecords.studyCounts,
      },
    },
  };
};

const getMemberInfoParams = (part?: Part): { filter?: number; generation: number } => {
  const generation = 32;
  let filter = null;

  switch (part) {
    case Part.PLAN:
      filter = 1;
      break;
    case Part.DESIGN:
      filter = 2;
      break;
    case Part.WEB:
      filter = 3;
      break;
    case Part.SERVER:
      filter = 4;
      break;
    case Part.ANDROID:
      filter = 5;
      break;
    case Part.IOS:
      filter = 6;
      break;
    default:
      break;
  }

  return filter ? { filter, generation } : { generation };
};

const getMemberInfo = async (part?: Part): Promise<GetMembersInfoResponse> => {
  const parameter = qs.stringify(getMemberInfoParams(part));

  const {
    data: { members },
  } = await client.get<{ members: MemberResponseDto[] }>(`/member?${parameter}`);

  return {
    members: members.map((member) => ({
      name: member.name ?? '-',
      description: member.introduction ?? '-',
      part: member.part ?? '-',
      src: member.profileImage ?? '',
    })),
  };
};

const parseServerPartsToClientParts = (_part: Parts): Part => {
  let returnPart: string = _part;
  if (returnPart === Parts.IOS) {
    returnPart = Part.IOS;
  }
  return returnPart as Part;
};

const getStudyInfo = async (): Promise<GetStudyInfoResponse> => {
  const { data } = await client.get<StudyResponseDto[]>('/study');

  return {
    studies: data.map((study: StudyResponseDto) => ({
      id: study.id,
      generation: study.generation,
      joinableParts: study.parts.map((part) => parseServerPartsToClientParts(part)),
      title: study.title,
      src: study.imageUrl,
      startDate: study.startDate,
      endDate: study.endDate,
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
