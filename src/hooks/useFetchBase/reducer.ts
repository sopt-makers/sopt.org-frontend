import type { Action, State } from './types';

export function reducer<T>(prevState: State<T>, action: Action<T>): State<T> {
  switch (action._TAG) {
    case 'FETCH':
      return {
        _TAG: 'LOADING',
      };
    case 'SUCCESS':
      if (action._TAG === 'SUCCESS') {
        return {
          _TAG: 'OK',
          data: action.data,
        };
      }
      break;
    case 'FAILED':
      return {
        _TAG: 'ERROR',
        error: action.error,
      };
  }

  return prevState;
}
