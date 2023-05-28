export const enum JobField {
  ALL = 'ALL',
  PM = 'PM',
  DESIGN = 'DESIGN',
  DEV = 'DEV',
}

export type CorporateJoin = {
  id: string;
  imgSrc: string;
  type: JobField;
  title: string;
  corporation: string;
  career: string;
  location: string;
};

export type JobAPI = {
  getCorporateJoins: (field?: JobField) => Promise<CorporateJoin[]>;
};
