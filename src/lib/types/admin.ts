import { SoptCommentType } from '@src/lib/types/main';

export type PartType = '기획' | '디자인' | '안드로이드' | 'iOS' | '웹' | '서버';
export type ExecutivesType =
  | '회장'
  | '부회장'
  | '총무'
  | '운영 팀장'
  | '미디어 팀장'
  | '메이커스 팀장';

export interface PartIntroType {
  part: string;
  description: string;
}
export interface LatestNewsType {
  id: number;
  title: string;
  image: string;
  link: string;
}

// 어드민 API가 그대로 내려주는 모드별 컬러. 어느 모드를 쓸지는 BRAND_COLOR_MODE로 고정
export interface RawBrandingColorType {
  darkModeKeyColor: string;
  darkModeTextColor: 'dark' | 'white';
  lightModeKeyColor: string;
  lightModeTextColor: 'dark' | 'white';
}

// resolveBrandingColor로 모드를 골라낸 뒤 컴포넌트들이 실제로 쓰는 형태
// 밝은 변형이 필요한 곳(그라디언트 등)은 CSS color-mix(main, white)로 그 자리에서 파생시켜 사용
export interface BrandingColorType {
  main: string;
  // main을 배경으로 쓰는 곳에서 그 위에 올릴 텍스트 색상(이미 실제 CSS 색상 값으로 변환됨)
  textColor: string;
}

// 어드민 API가 그대로 내려주는 후기. authorInfo는 "이름 | 기수 | 파트" 형태의 문자열
export interface RawReviewType {
  id: number;
  title: string;
  content: string;
  authorInfo: string;
}

export interface GetHomepageResponse {
  homeHeaderImage: string;
  generation: number;
  name: string;
  brandingColor: BrandingColorType;
  mainButton: {
    text: string;
    keyColor: string;
    subColor: string;
  };
  partIntroduction: PartIntroType[];
  latestNews: LatestNewsType[];
  recruitSchedule: RecruitScheduleType[];
  activitiesRecords: {
    activitiesMemberCount: number;
    projectCounts: number;
    studyCounts: number;
    operationPeriod: number;
  };
  // resolveReviews로 SoptCommentType[]로 가공된 뒤 컴포넌트들이 실제로 쓰는 형태
  reviews: SoptCommentType[];
}

export interface MemberType {
  role: ExecutivesType | PartType;
  name: string;
  affiliation: string;
  introduction: string;
  profileImage: string;
  sns: {
    email?: string;
    linkedin?: string;
    github?: string;
    behance?: string;
  };
}

export interface PartCurriculumType {
  part: PartType;
  curriculums: string[];
}
export interface CoreValueType {
  value: string;
  description: string;
  image: string;
}
export interface ActivityScheduleItemType {
  name: string;
  startDate: string;
  endDate: string | null;
}

export interface GetAboutpageResponse {
  generation: number;
  name: string;
  headerImage: string;
  brandingColor: BrandingColorType;
  coreValue: CoreValueType[];
  partCurriculum: PartCurriculumType[];
  member: MemberType[];
  schedule?: ActivityScheduleItemType[];
  activitiesRecords: {
    activitiesMemberCount: number;
    projectCounts: number;
    studyCounts: number;
    operationPeriod: number;
  };
}

export interface PartInfoType {
  part: PartType;
  introduction: {
    content: string;
    preference: string;
  };
}
export interface QnAType {
  question: string;
  answer: string;
}
export interface PartQuestionType {
  part: PartType;
  questions: QnAType[];
}
export interface ScheduleType {
  applicationStartTime: string;
  applicationEndTime: string;
  applicationResultTime: string;
  interviewStartTime: string;
  interviewEndTime: string;
  finalResultTime: string;
}
export interface RecruitScheduleType {
  type: 'OB' | 'YB';
  schedule: ScheduleType;
}
export interface GetRecruitpageResponse {
  generation: number;
  name: string;
  recruitHeaderImage: string;
  brandingColor: BrandingColorType;
  recruitSchedule: RecruitScheduleType[];
  recruitPartCurriculum: PartInfoType[];
  recruitQuestion: PartQuestionType[];
}
