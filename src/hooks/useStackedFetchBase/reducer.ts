import type { Action, State } from './types';

export function reducer<T>(prevState: State<T>, action: Action<T>): State<T> {
  switch (action._TAG) {
    case 'FETCH':
      if (prevState._TAG === 'ERROR') throw new Error('Invalid action during error');
      return {
        _TAG: 'LOADING',
        data: action.isInitialFetching ? [] : prevState.data,
      };
    case 'FAILED':
      return {
        _TAG: 'ERROR',
        error: action.error,
      };
    case 'SUCCESS':
      if (prevState._TAG === 'ERROR') throw new Error('Invalid action during error');
      return {
        _TAG: 'OK',
        data: action.isInitialFetching ? action.data : [...prevState.data, ...action.data],
      };
    default:
      throw new Error('Unknown action type');
  }
}
