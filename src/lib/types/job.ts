export const enum JobField {
  ALL = '전체',
  PM = '기획',
  DESIGN = '디자인',
  DEV = '개발',
}

export type CorporateJoin = {
  id: number;
  imgSrc: string;
  type: JobField;
  title: string;
  corporation: string;
  career: string;
  location: string;
  url: string;
};

export type JobAPI = {
  getCorporateJobsByField: (field?: JobField) => Promise<CorporateJoin[]>;
};
