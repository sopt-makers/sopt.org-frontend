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
import axios from 'axios';
import qs from 'qs';

const getAboutInfo = async (): Promise<GetAboutInfoResponse> => {
  const { data: generations } = await axios.get<number[]>('aboutsopt/published-ids');
  const { data } = await axios.get(`/aboutsopt/semester/${generations[0]}`);

  return {
    aboutInfo: {
      generation: generations[0],
      title: data.title,
      bannerImage: data.bannerImage,
      coreValue: {
        mainDescription: data.coreDescription,
        eachValues: data.coreValues.map((coreValue: CoreValueResponseDto) => ({
          title: coreValue.title,
          description: coreValue.subTitle,
          src: coreValue.imageUrl,
        })),
      },
      curriculums: {
        [Part.PLAN]: data.planCurriculum,
        [Part.DESIGN]: data.designCurriculum,
        [Part.ANDROID]: data.androidCurriculum,
        [Part.IOS]: data.iosCurriculum,
        [Part.SERVER]: data.serverCurriculum,
        [Part.WEB]: data.webCurriculum,
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
  } = await axios.get<{ members: MemberResponseDto[] }>(`/member?${parameter}`);

  return {
    members: members.map((member) => ({
      name: member.name,
      description: member.introduction,
      part: member.part,
      src: member.profileImage,
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
  const { data } = await axios.get<StudyResponseDto[]>('/study');

  // TODO :: hasNextPage property 개발 요청
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
