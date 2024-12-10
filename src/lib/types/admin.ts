type PartType = '기획' | '디자인' | '안드로이드' | 'iOS' | '웹' | '서버';
type ExecutivesType = '부회장' | '총무' | '운영 팀장' | '미디어 팀장' | '메이커스 팀장';

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
export interface GetHomepageRespons {
  generation: number;
  name: string;
  brandingColor: {
    main: string;
    low: string;
    high: string;
    point: string;
  };
  mainButton: {
    text: string;
    keyColor: string;
    subColor: string;
  };
  partIntroduction: PartIntroType[];
  latestNews: LatestNewsType[];
}

export interface MemberType {
  role: ExecutivesType & PartType;
  name: string;
  affiliation: string;
  introduction: string;
  profileImage: string;
  sns: {
    email: string;
    linkedin: string;
    github: string;
    behance: string;
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
export interface GetAboutpageResponse {
  generation: number;
  name: string;
  headerImage: string;
  brandingColor: {
    main: string;
    low: string;
    high: string;
    point: string;
  };
  coreValue: CoreValueType[];
  partCurriculum: PartCurriculumType[];
  member: MemberType[];
}

export interface PartInfoType {
  part: PartType;
  introduction: {
    content: string;
    preference: string;
  };
}
interface QnAType {
  question: string;
  answer: string;
}
export interface PartQuestionType {
  part: PartType;
  questions: QnAType[];
}
export interface RecruitScheduleType {
  type: 'OB' | 'YB';
  schedule: {
    applicationStartTime: string;
    applicationEndTime: string;
    applicationResultTime: string;
    interviewStartTime: string;
    interviewEndTime: string;
    finalResultTime: string;
  };
}
export interface GetRecruitpageResponse {
  generation: number;
  name: string;
  recruitHeaderImage: string;
  brandingColor: {
    main: string;
    low: string;
    high: string;
    point: string;
  };
  recruitSchedule: RecruitScheduleType[];
  recruitPartCurriculum: PartInfoType[];
  recruitQuestion: PartQuestionType[];
}
