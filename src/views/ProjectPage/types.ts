export interface ProjectType {
  id: number;
  name: string;
  semester: number;
  isProvidingService: boolean;
  isBusinessing: boolean;
  teamMembers: string[];
  afterJoinedTeamMembers: string[];
  serviceType: string[];
  startDate: string;
  endDate: string;
  inProgress: boolean;
  shortIntroduction: string;
  detail: string;
  logoImageUrl: string;
  thumbnailImageUrl: string;
  projectImageUrl: string;
  link: string[];
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
