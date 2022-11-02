export interface TeamMembersType {
  name: string;
  role: string;
  roleDetail: string;
}

export interface LinkType {
  type: LinkDetailType;
  url: string;
}

export type LinkDetailType = 'website' | 'appstore' | 'github' | 'instagram' | 'media';

export interface UpButtonProps {
  isScrolled: boolean;
}
