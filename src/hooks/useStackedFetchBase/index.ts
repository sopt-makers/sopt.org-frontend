import { to } from 'await-to-js';
import { useEffect, useReducer } from 'react';
import { reducer } from './reducer';
import { Action, State } from './types';

function useStackedFetchBase<T>(
  willFetch: () => Promise<T[]>,
  isInitialFetching: boolean,
): State<T> {
  const [state, dispatch] = useReducer<React.Reducer<State<T>, Action<T>>>(reducer, {
    _TAG: 'IDLE',
    data: [],
  });

  useEffect(() => {
    const fetchList = async () => {
      dispatch({
        _TAG: 'FETCH',
        isInitialFetching,
      });

      const [error, response] = await to(willFetch());

      if (error) {
        return dispatch({
          _TAG: 'FAILED',
          error,
        });
      }

      if (response) {
        dispatch({ _TAG: 'SUCCESS', isInitialFetching, data: response });
      }
    };

    fetchList();
  }, [willFetch, isInitialFetching]);

  return state;
}

export default useStackedFetchBase;
