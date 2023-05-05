import {
  GetAboutInfoResponse,
  GetMembersInfoResponse,
  GetStudyInfoResponse,
} from '@src/lib/types/about';
import { Parts, StudyResponseDto } from '@src/lib/types/dto';
import { Part } from '@src/lib/types/universal';
import axios from 'axios';

const parseServerPartsToClientParts = (_part: Parts): Part => {
  let returnPart: string = _part;
  if (returnPart === Parts.IOS) {
    returnPart = Part.IOS;
  }
  return returnPart as Part;
};

const getStudyInfo = async (): Promise<GetStudyInfoResponse> => {
  const { data } = await axios.get<StudyResponseDto[]>('/study');

  const studies = data.map((study: StudyResponseDto) => ({
    id: study.id,
    generation: study.generation,
    joinableParts: study.parts.map((part) => parseServerPartsToClientParts(part)),
    title: study.title,
    src: study.imageUrl,
    startDate: study.startDate,
    endDate: study.endDate,
    membersCount: study.memberCount,
  }));

  // TODO :: hasNextPage property 개발 요청
  return {
    studies,
    hasNextPage: true,
  };
};

export const remoteAboutAPI = {
  getStudyInfo,
};
