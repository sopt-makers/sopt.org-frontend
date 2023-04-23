import { remoteProjectAPI } from './remote/project';
import { remoteReviewAPI } from './remote/review';
import { API } from './types';

export const api: API = {
  projectAPI: remoteProjectAPI,
  reviewAPI: remoteReviewAPI,
};
