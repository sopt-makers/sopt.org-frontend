export type State<T> =
  | {
      _TAG: 'IDLE';
      data: T[];
    }
  | {
      _TAG: 'LOADING';
      data: T[];
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
      isInitialFetching: boolean;
    }
  | {
      _TAG: 'FAILED';
      error: Error;
    }
  | {
      _TAG: 'SUCCESS';
      isInitialFetching: boolean;
      data: T[];
    };
