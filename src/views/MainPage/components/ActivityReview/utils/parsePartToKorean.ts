import { TAB } from '@src/views/ReviewPage/types';

// TODO :: ReviewType의 part 타입을 string -> TAB 변경
export function parsePartToKorean(part: string) {
  switch (part) {
    case TAB.ANDROID:
      return '안드로이드';
    case TAB.WEB:
      return '웹';
    case TAB.DESIGN:
      return '디자인';
    case TAB.PLAN:
      return '기획';
    case TAB.SERVER:
      return '서버';
    default:
      return part;
  }
}
