export const enum JobField {
  ALL = 'ALL',
  PM = 'PM',
  DESIGN = 'DESIGN',
  DEV = 'DEV',
}

export type CorporateJoin = {
  id: number;
  imgSrc: string;
  type: JobField;
  title: string;
  corporation: string;
  career: string;
  location: string;
};

export type JobAPI = {
  getCorporateJobsByField: (field?: JobField) => Promise<CorporateJoin[]>;
};
