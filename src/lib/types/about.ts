import { Part } from './universal';

export interface CoreValueType {
  title: string;
  description: string;
  src: string;
}

export interface MemberType {
  id: number;
  name: string;
  description?: string;
  part: string;
  src?: string;
}

export interface AboutInfoType {
  generation: number;
  title: string;
  bannerImage: string;
  coreValue: {
    mainDescription: string;
    eachValues: CoreValueType[];
  };
  curriculums: Record<Part, string>;
  records: {
    memberCount: number;
    projectCount: number;
    studyCount: number;
  };
}

export interface StudyInfoType {
  id: number;
  generation: number;
  joinableParts: Part[];
  title: string;
  src: string;
  startDate: Date;
  endDate: Date;
  membersCount: number;
}

export interface GetMembersInfoResponse {
  members: MemberType[];
}

export interface GetAboutInfoResponse {
  aboutInfo: AboutInfoType;
}

export interface GetStudyInfoResponse {
  studies: StudyInfoType[];
  hasNextPage: boolean;
}

export interface AboutAPI {
  getAboutInfo(): Promise<GetAboutInfoResponse>;
  getMemberInfo(part?: Part): Promise<GetMembersInfoResponse>;
  getStudyInfo(generation?: number): Promise<GetStudyInfoResponse>;
}
