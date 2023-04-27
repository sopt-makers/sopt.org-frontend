import { Part } from './universal';

export interface CoreValueType {
  title: string;
  description: string;
  src: string;
}

export interface MemberType {
  name: string;
  description: string;
  part: Part;
  src: string;
}

export interface AboutInfoType {
  generation: number;
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
  members: MemberType[];
}

export interface GetAboutInfoResponse {
  aboutInfo: AboutInfoType;
}

export interface AboutAPI {
  getAboutInfo(generation: number): GetAboutInfoResponse;
}
