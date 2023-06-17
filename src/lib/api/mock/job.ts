import ImgLevitLogo from '@src/assets/corperates/levit.webp';
import { CorporateJoin, JobAPI, JobField } from '@src/lib/types/job';

const corporateJobs: CorporateJoin[] = [
  {
    id: 1,
    imgSrc: ImgLevitLogo.src,
    type: JobField.PM,
    title: '리크루팅 업무 보조 인턴',
    corporation: '레브잇(올웨이즈)',
    career: '신입',
    location: '서울 관악구',
    url: 'https://parangjy.notion.site/bfe8ba96114c42069616661e1876e121?pvs=4',
  },
  {
    id: 2,
    imgSrc: ImgLevitLogo.src,
    type: JobField.PM,
    title: 'CEO Staff 인턴',
    corporation: '레브잇(올웨이즈)',
    career: '신입',
    location: '서울 관악구',
    url: 'https://parangjy.notion.site/bfe8ba96114c42069616661e1876e121?pvs=4',
  },
  {
    id: 3,
    imgSrc: ImgLevitLogo.src,
    type: JobField.PM,
    title: 'Biz Dev 인턴',
    corporation: '레브잇(올웨이즈)',
    career: '신입',
    location: '서울 관악구',
    url: 'https://parangjy.notion.site/bfe8ba96114c42069616661e1876e121?pvs=4',
  },
];

const getCorporateJobsByField = async (field?: JobField) => {
  if (field === JobField.ALL) return corporateJobs;
  return corporateJobs.filter((corporateJob) => corporateJob.type === field);
};

export const mockJobAPI: JobAPI = {
  getCorporateJobsByField,
};
