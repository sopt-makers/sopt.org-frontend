export interface TeamMembersType {
  name: string;
  role: string;
  description: string;
}

export interface LinkType {
  title: LinkDetailType;
  url: string;
}

export type LinkDetailType =
  | '웹사이트'
  | '앱 스토어'
  | '구글 플레이스토어'
  | 'Github'
  | 'instagram'
  | '발표영상';

export interface UpButtonProps {
  isScrolled: boolean;
}
