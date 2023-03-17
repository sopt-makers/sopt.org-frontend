import type { Action, State } from './types';

export function reducer<T>(prevState: State<T>, action: Action<T>): State<T> {
  switch (prevState._TAG) {
    case 'IDLE':
      if (action._TAG === 'FETCH') {
        return {
          _TAG: 'LOADING',
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
          data: action.data,
        };
      }
      break;
    case 'OK':
      if (action._TAG === 'FETCH') {
        return {
          _TAG: 'LOADING',
        };
      }
      break;
    default:
      throw new Error(`Unknown action type: ${action._TAG}`);
  }

  return prevState;
}
