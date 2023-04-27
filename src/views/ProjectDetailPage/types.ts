export interface TeamMembersType {
  name: string;
  role: string;
  description: string;
}

export type LinkDetailType =
  | 'website'
  | 'appStore'
  | 'googlePlay'
  | 'github'
  | 'instagram'
  | 'media';

export interface UpButtonProps {
  isScrolled: boolean;
}
