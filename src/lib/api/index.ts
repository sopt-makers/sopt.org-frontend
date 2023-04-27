import { API } from '../types/universal';
import { remoteProjectAPI } from './remote/project';
import { remoteReviewAPI } from './remote/review';

export const api: API = {
  projectAPI: remoteProjectAPI,
  reviewAPI: remoteReviewAPI,
};
