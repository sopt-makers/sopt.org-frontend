import { Part } from '@src/lib/types/universal';

// TODO :: ReviewType의 part 타입을 string -> TAB 변경
export function parsePartToKorean(part: string) {
  switch (part) {
    case Part.ANDROID:
      return '안드로이드';
    case Part.WEB:
      return '웹';
    case Part.DESIGN:
      return '디자인';
    case Part.PLAN:
      return '기획';
    case Part.SERVER:
      return '서버';
    default:
      return part;
  }
}
