import { ReviewTab } from '@src/lib/api/types/review';

// TODO :: ReviewType의 part 타입을 string -> TAB 변경
export function parsePartToKorean(part: string) {
  switch (part) {
    case ReviewTab.ANDROID:
      return '안드로이드';
    case ReviewTab.WEB:
      return '웹';
    case ReviewTab.DESIGN:
      return '디자인';
    case ReviewTab.PLAN:
      return '기획';
    case ReviewTab.SERVER:
      return '서버';
    default:
      return part;
  }
}
