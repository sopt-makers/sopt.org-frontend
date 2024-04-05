import { Part } from './universal';

export interface CoreValueType {
  title: string;
  description: string;
  src: string;
}

export interface MemberType {
  id: number;
  name: string;
  position: PositionType;
  currentProject: string;
  description?: string;
  imageSrc?: string;
  gmail?: string;
  linkedin?: string;
  github?: string;
}

export type PositionType =
  | '회장'
  | '부회장'
  | '총무'
  | '미디어 팀장'
  | '운영 팀장'
  | '기획 파트장'
  | '디자인 파트장'
  | '안드로이드 파트장'
  | 'iOS 파트장'
  | '웹 파트장'
  | '서버 파트장'
  | '메이커스 팀장'
  | '';

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

export interface GetMembersInfoResponse {
  members: MemberType[];
}

export interface GetAboutInfoResponse {
  aboutInfo: AboutInfoType;
}

export interface AboutAPI {
  getAboutInfo(): Promise<GetAboutInfoResponse>;
  getMemberInfo(): Promise<GetMembersInfoResponse>;
}

export type RecordTitle = '활동 멤버' | '프로젝트' | '스터디';
export type RecordTitleType = {
  [key in RecordTitle]: 'member' | 'project' | 'study';
};
