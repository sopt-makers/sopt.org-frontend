import { Part } from '@src/lib/types/universal';

export const parseStringToPart = (_part: string): Part => {
  switch (_part.toUpperCase()) {
    case '기획':
    case 'PM':
    case 'PLAN':
      return Part.PLAN;
    case '디자인':
    case 'DESIGN':
      return Part.DESIGN;
    case '웹':
    case 'WEB':
      return Part.WEB;
    case '서버':
    case 'SERVER':
      return Part.SERVER;
    case '안드로이드':
    case 'ANDROID':
      return Part.ANDROID;
    case 'IOS':
      return Part.IOS;
    default:
      throw Error('올바른 파트명이 아님');
  }
};
