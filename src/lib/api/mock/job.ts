import {
  ImgCodeitLogo,
  ImgDoodlinLogo,
  ImgGreenlabsLogo,
  ImgMiridihLogo,
  ImgRingleLogo,
  ImgTeamSpartaLogo,
  ImgTossLogo,
  ImgVoyagerxLogo,
} from '@src/assets/corperates';
import { CorporateJoin, JobAPI, JobField } from '@src/lib/types/job';

const corporateJobs: CorporateJoin[] = [
  {
    id: 1,
    imgSrc: ImgRingleLogo.src,
    type: JobField.PM,
    title: 'Ringle Tutor-Product Team 인턴',
    corporation: '링글잉글리시에듀케이션서비스',
    career: '신입',
    location: '서울시 강남구',
    url: 'https://career.ringleplus.com/33268e39-9b71-4c39-ac58-dffe162374c7',
  },
  {
    id: 2,
    imgSrc: ImgMiridihLogo.src,
    type: JobField.PM,
    title: 'Jr.프로덕트 매니저',
    corporation: '미리디',
    career: '신입',
    location: ' 서울시 구로구',
    url: 'https://miridih.career.greetinghr.com/o/15616',
  },
  {
    id: 3,
    imgSrc: ImgVoyagerxLogo.src,
    type: JobField.PM,
    title: '서비스기획 인턴',
    corporation: '보이저엑스',
    career: '신입',
    location: '서울시 강남구',
    url: 'https://v6xcareer.notion.site/6cdb0e85d6ec4b06a42f8f54af4656a5',
  },
  {
    id: 4,
    imgSrc: ImgVoyagerxLogo.src,
    type: JobField.DESIGN,
    title: 'UX/UI 디자인 인턴',
    corporation: '보이저엑스',
    career: '신입',
    location: '서울시 강남구',
    url: 'https://v6xcareer.notion.site/UX-UI-b124028c53a94b61937dbfa230bc07c3',
  },
  {
    id: 5,
    imgSrc: ImgCodeitLogo.src,
    type: JobField.DESIGN,
    title: '프로덕트 디자인 인턴',
    corporation: '코드잇',
    career: '신입',
    location: ' 서울시 중구',
    url: 'https://careers.codeit.com/product-designer-intern',
  },
  {
    id: 6,
    imgSrc: ImgTossLogo.src,
    type: JobField.DESIGN,
    title: 'Interaction Design Assistant',
    corporation: '토스',
    career: '신입',
    location: '서울시 강남구',
    url: 'https://toss.im/career/job-detail?job_id=5543906003&gh_src=b0a27cbf3us&utm_source=superrookie&utm_medium=post&utm_campaign=2307_Interaction',
  },
  {
    id: 7,
    imgSrc: ImgDoodlinLogo.src,
    type: JobField.DEV,
    title: '백엔드 엔지니어 채용연계형 인턴',
    corporation: '두들린',
    career: '신입',
    location: '서울시 강남구',
    url: 'https://www.doodlin.co.kr/o/91161',
  },
  {
    id: 8,
    imgSrc: ImgGreenlabsLogo.src,
    type: JobField.DEV,
    title: '프론트엔드 엔지니어',
    corporation: '그린랩스',
    career: '신입',
    location: ' 서울시 송파구',
    url: 'https://greenlabs.co.kr/recruit/%ed%8c%9c%eb%aa%a8%eb%8b%9d-%ed%94%84%eb%a1%a0%ed%8a%b8%ec%97%94%eb%93%9c-%ec%97%94%ec%a7%80%eb%8b%88%ec%96%b4/',
  },
  {
    id: 9,
    imgSrc: ImgTeamSpartaLogo.src,
    type: JobField.DEV,
    title: '백엔드 엔지니어 인턴',
    corporation: '팀스파르타',
    career: '신입',
    location: '서울시 강남구',
    url: 'https://career.spartacodingclub.kr/o/91002',
  },
];

const getCorporateJobsByField = async (field?: JobField) => {
  if (field === JobField.ALL) return corporateJobs;
  return corporateJobs.filter((corporateJob) => corporateJob.type === field);
};

export const mockJobAPI: JobAPI = {
  getCorporateJobsByField,
};
