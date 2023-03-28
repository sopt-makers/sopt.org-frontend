export type State<T> =
  | {
      _TAG: 'IDLE';
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
      data: T[];
    }
  | {
      _TAG: 'FAILED';
      error: Error;
    }
  | {
      _TAG: 'SUCCESS';
      data: T[];
    };
