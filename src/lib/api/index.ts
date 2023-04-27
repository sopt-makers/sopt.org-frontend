import { API } from '../types/universal';
import { mockAboutAPI } from './mock/about';
import { remoteProjectAPI } from './remote/project';
import { remoteReviewAPI } from './remote/review';

export const api: API = {
  projectAPI: remoteProjectAPI,
  reviewAPI: remoteReviewAPI,
  aboutAPI: mockAboutAPI,
};
