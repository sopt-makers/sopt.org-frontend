export enum LinkType {
  웹사이트 = 'website',
  발표영상 = 'media',
  Github = 'github',
  instagram = 'instagram',
  '구글 플레이스토어' = 'googlePlay',
  '앱 스토어' = 'appStore',
  '기타 관련자료' = 'media',
}

export interface ProjectType {
  detail: string;
  endAt: string;
  generation?: number;
  id: number;
  isAvailable: boolean;
  isFounding: boolean;
  link: { title: LinkType; url: string }[];
  logoImage: string;
  members: { name: string; role: string; description: string }[];
  name: string;
  projectImage: null;
  serviceType: string[] | string;
  startAt: string;
  summary: string;
  thumbnailImage?: string;
  updatedAt: string;
  uploadedAt: string;
}
