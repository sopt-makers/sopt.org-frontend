export interface ProjectType {
  category: CategoryType;
  detail: string;
  endAt: string;
  generation: number;
  id: number;
  isAvailable: boolean;
  isFounding: boolean;
  link: LinkType[];
  logoImage: string;
  members: { name: string; role: string; description: string }[];
  name: string;
  projectImage: null;
  serviceType: string[];
  startAt: string;
  summary: string;
  thumbnailImage: null | string;
  updatedAt: string;
  uploadedAt: string;
}

/* category type이 추가되면 반영되어야함 */
interface CategoryType {
  project: string;
}
interface LinkType {
  title: string;
  url: string;
}

export type State<T> =
  | {
      _TAG: 'IDLE';
    }
  | {
      _TAG: 'LOADING';
    }
  | {
      _TAG: 'ERROR';
      error: Error;
    }
  | {
      _TAG: 'OK';
      data: T[];
    };

export type Action<T> =
  | {
      _TAG: 'FETCH';
    }
  | {
      _TAG: 'FAILED';
      error: Error;
    }
  | {
      _TAG: 'SUCCESS';
      data: T[];
    };
