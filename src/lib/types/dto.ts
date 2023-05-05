export type CoreValueResponseDto = {
  id: number;
  title: string;
  subTitle: string;
  imageUrl: string;
};

export type MemberResponseDto = {
  id: number;
  name: string;
  profileImage: string;
  introduction: string;
  part: string;
  generation: number;
};

export type StudyResponseDto = {
  id: number;
  generation: number;
  parts: string[];
  title: string;
  imageUrl: string;
  startDate: Date;
  endDate: Date;
  memberCount: number;
};
