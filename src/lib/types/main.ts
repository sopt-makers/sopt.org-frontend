import { Part, TextWeightType } from '@src/lib/types/universal';

export type IntroContentType = {
  id: number;
  title: string;
  detail: string;
  src: string;
};

type KeywordType = {
  content: string;
  backgroundColor: string;
  color: string;
  top: string;
  right: string;
};

export type KeywordListType = Record<Part, KeywordType[]>;

type PartInfoType = {
  value: string;
  label: string;
  description: TextWeightType[];
};

export type PartListType = Record<Part, PartInfoType>;
