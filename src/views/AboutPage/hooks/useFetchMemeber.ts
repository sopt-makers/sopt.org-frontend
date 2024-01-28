import { useCallback } from 'react';
import useFetchBase from '@src/hooks/useFetchBase';
import { api } from '@src/lib/api';

const useFetchMember = () => {
  const willFetch = useCallback(async () => {
    const response = await api.aboutAPI.getMemberInfo();
    return response;
  }, []);
  const state = useFetchBase(willFetch);
  return state;
};

export default useFetchMember;
