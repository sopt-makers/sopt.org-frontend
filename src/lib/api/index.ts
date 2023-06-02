import { API } from '../types/universal';
import { mockJobAPI } from './mock/job';
import { remoteAboutAPI } from './remote/about';
import { remoteProjectAPI } from './remote/project';
import { remoteReviewAPI } from './remote/review';
import { remoteSopticleAPI } from './remote/sopticle';

export const api: API = {
  projectAPI: remoteProjectAPI,
  reviewAPI: remoteReviewAPI,
  aboutAPI: remoteAboutAPI,
  sopticleAPI: remoteSopticleAPI,
  jobAPI: mockJobAPI,
};
