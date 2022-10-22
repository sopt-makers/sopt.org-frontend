export const projectCategoryList: {
  type: CategoryType;
  name: string;
}[] = [
  { type: 'Whole', name: '전체' },
  { type: 'Appjam', name: '🎊 앱잼' },
  { type: 'Soptakon', name: '💡 솝커톤' },
  { type: 'Sopterm', name: '🛎 솝텀 프로젝트' },
  { type: 'Study', name: '📖 스터디' },
  { type: 'Collaborate', name: '👥 합동 세미나' },
  { type: 'Etc', name: '💬 기타' },
];

export type CategoryType =
  | 'Whole'
  | 'Appjam'
  | 'Soptakon'
  | 'Sopterm'
  | 'Study'
  | 'Collaborate'
  | 'Etc';
