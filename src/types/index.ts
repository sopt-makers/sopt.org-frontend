export type AboutInfoType =
  | 'SEMINAR'
  | 'APPJAM'
  | 'SOPKATHON'
  | 'STUDY_NETWORKUNG'
  | 'SOPTTERM'
  | 'TEAM';

export interface ABOUT_INFO_TYPE {
  description: string;
  title: string;
  pc_contents: string;
  mobile_contents: string;
}

export type PartKorean = '기획' | '디자인' | '개발';

export interface PartInfos {
  title: PartKorean;
  contents: string;
  delay: number;
}
