import { ProjectAPI } from './project';
import { ReviewAPI } from './review';

export interface API {
  projectAPI: ProjectAPI;
  reviewAPI: ReviewAPI;
}
