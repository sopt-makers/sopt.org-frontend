import { to } from 'await-to-js';
import { useEffect, useReducer, useRef } from 'react';
import { reducer } from './reducer';
import { Action, State } from './types';

function useStackedFetchBase<T>(willFetch: () => Promise<T[]>, isInitialFetching: boolean): State<T> {
  const [state, dispatch] = useReducer<React.Reducer<State<T>, Action<T>>>(reducer, {
    _TAG: 'IDLE',
  });
  const stateStack = useRef<T[]>([]);

  useEffect(() => {
    const fetchProjectList = async () => {
      dispatch({
        _TAG: 'FETCH',
        data: isInitialFetching ? [] : stateStack.current,
      });

      const [error, response] = await to(willFetch());

      if (error) {
        return dispatch({
          _TAG: 'FAILED',
          error,
        });
      }

      if (response) {
        const newState = isInitialFetching ? [...response] : [...stateStack.current, ...response];

        dispatch({ _TAG: 'SUCCESS', data: newState });
        stateStack.current = newState;
      }
    };
    
    fetchProjectList();
  }, [willFetch, isInitialFetching]);

  return state;
}

export default useStackedFetchBase;
