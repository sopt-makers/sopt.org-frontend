import type { Action, State } from './types';

export function reducer<T>(prevState: State<T>, action: Action<T>): State<T> {
  switch (prevState._TAG) {
    case 'IDLE':
      if (action._TAG === 'FETCH') {
        return {
          _TAG: 'LOADING',
          data: action.isInitialFetching ? [] : prevState.data,
        };
      }
      break;
    case 'LOADING':
      if (action._TAG === 'FAILED') {
        return {
          _TAG: 'ERROR',
          error: action.error,
        };
      }
      if (action._TAG === 'SUCCESS') {
        return {
          _TAG: 'OK',
          data: action.isInitialFetching ? action.data : [...prevState.data, ...action.data],
        };
      }
      break;
    case 'OK':
      if (action._TAG === 'FETCH') {
        return {
          _TAG: 'LOADING',
          data: action.isInitialFetching ? [] : prevState.data,
        };
      }
      break;
    default:
      throw new Error(`Unknown action type: ${action._TAG}`);
  }

  return prevState;
}
