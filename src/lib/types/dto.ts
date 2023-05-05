export type MemberResponseDto = {
  id: number;
  name: string;
  profileImage: string;
  introduction: string;
  part: string;
  generation: number;
};

export enum Parts {
  PM = 'PM',
  DESIGN = 'DESIGN',
  IOS = 'IOS',
  ANDROID = 'ANDROID',
  SERVER = 'SERVER',
  WEB = 'WEB',
}

export type StudyResponseDto = {
  id: number;
  generation: number;
  parts: Parts[];
  title: string;
  imageUrl: string;
  startDate: Date;
  endDate: Date;
  memberCount: number;
};
