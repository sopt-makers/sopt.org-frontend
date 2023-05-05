import { API } from '../types/universal';
import { remoteAboutAPI } from './remote/about';
import { remoteProjectAPI } from './remote/project';
import { remoteReviewAPI } from './remote/review';

export const api: API = {
  projectAPI: remoteProjectAPI,
  reviewAPI: remoteReviewAPI,
  aboutAPI: remoteAboutAPI,
};
