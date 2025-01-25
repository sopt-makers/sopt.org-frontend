import { API } from '../types/universal';
import { remoteAboutAPI } from './remote/about';
// import { remoteAdminAPI } from './remote/admin';
import { remoteProjectAPI } from './remote/project';
import { remoteReviewAPI } from './remote/review';
import { remoteSopticleAPI } from './remote/sopticle';

export const api: API = {
  projectAPI: remoteProjectAPI,
  reviewAPI: remoteReviewAPI,
  aboutAPI: remoteAboutAPI,
  sopticleAPI: remoteSopticleAPI,
};
