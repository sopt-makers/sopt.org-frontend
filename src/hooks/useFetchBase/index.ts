import { to } from 'await-to-js';
import { useEffect, useReducer } from 'react';
import { reducer } from './reducer';
import type { Action, State } from './types';

function useFetchBase<T>(willFetch: () => Promise<T[]>): State<T> {
  const [state, dispatch] = useReducer<React.Reducer<State<T>, Action<T>>>(reducer, {
    _TAG: 'IDLE',
  });

  useEffect(() => {
    const fetchProjectList = async () => {
      dispatch({
        _TAG: 'FETCH',
      });

      const [error, response] = await to(willFetch());

      if (error) {
        return dispatch({
          _TAG: 'FAILED',
          error,
        });
      }

      if (response) {
        return dispatch({ _TAG: 'SUCCESS', data: response });
      }
    };

    fetchProjectList();
  }, [willFetch]);

  return state;
}

export default useFetchBase;
