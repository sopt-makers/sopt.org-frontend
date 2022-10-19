import type { ProjectType } from './types';

const mockData: ProjectType = {
  id: 0,
  name: 'TAKEUS',
  semester: 0,
  isProvidingService: true,
  isBusinessing: true,
  teamMembers: ['string'],
  afterJoinedTeamMembers: ['string'],
  serviceType: ['string'],
  startDate: '2022-10-19T01:44:53.970Z',
  endDate: '2022-10-19T01:44:53.970Z',
  inProgress: true,
  shortIntroduction: 'string',
  detail: 'string',
  logoImageUrl: 'string',
  thumbnailImageUrl: 'string',
  projectImageUrl: 'string',
  link: ['string'],
};

export const getProjectList = async (): Promise<ProjectType[]> => {
  return Promise.resolve(new Array(5).fill(mockData));
};
