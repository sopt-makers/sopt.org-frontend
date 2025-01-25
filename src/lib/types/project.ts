export enum ProjectPlatformType {
  ALL = 'ALL',
  WEB = 'WEB',
  APP = 'APP',
}

export enum ProjectCategoryType {
  ALL = 'ALL',
  APPJAM = 'APPJAM',
  SOPKATHON = 'SOPKATHON',
  SOPTERM = 'SOPTERM',
}

export enum LinkType {
  웹사이트 = 'website',
  발표영상 = 'media',
  Github = 'github',
  instagram = 'instagram',
  '구글 플레이스토어' = 'googlePlay',
  '앱 스토어' = 'appStore',
  '기타 관련자료' = 'media',
}

export interface ProjectLinkType {
  title: LinkType;
  url: string;
}

interface ProjectMemberType {
  name: string;
  role: string;
  description: string;
}

export interface ProjectType {
  detail: string;
  generation?: number;
  id: number;
  isAvailable: boolean;
  isFounding: boolean;
  links: ProjectLinkType[];
  logoImage: string;
  projectImage?: string;
  thumbnailImage?: string;
  members: ProjectMemberType[];
  name: string;
  serviceType: string[];
  startAt: string;
  endAt: string;
  summary: string;
  updatedAt: string;
  uploadedAt: string;
}

export interface StaticProjectType {
  generation: number;
  links: ProjectLinkType[];
  logoImage: string;
  name: string;
  summary: string;
}

export interface GetProjectDetailResponse {
  project: ProjectType;
}

export type ProjectResponse = {
  currentPage: number;
  data: ProjectType[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  totalCount: number;
  totalPage: number;
};

export interface ProjectAPI {
  getProjectDetail(projectId: number): Promise<GetProjectDetailResponse>;
  getProjectList(
    category: ProjectCategoryType,
    platform: ProjectPlatformType,
    pageNo: number,
  ): Promise<ProjectResponse>;
}
