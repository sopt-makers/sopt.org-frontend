import { useCallback } from 'react';
import useFetchBase from '@src/hooks/useFetchBase';
import { api } from '@src/lib/api';
import { ExtraPart, PartExtraType } from '@src/lib/types/universal';

const useFetchMember = (part: ExtraPart) => {
  const willFetch = useCallback(async () => {
    const response = await api.aboutAPI.getMemberInfo(
      part === PartExtraType.ALL ? undefined : part,
    );
    return response;
  }, [part]);
  const state = useFetchBase(willFetch);
  return state;
};

export default useFetchMember;
