export type IntroContentType = {
  id: number;
  title: string;
  detail: string;
  src: string;
};

export type TextColorType = {
  content: string;
  color: 'yellow' | 'white';
};

export interface ActivityType {
  img: string;
  navKor: string;
  navEng: string;
  description: TextColorType[];
}
