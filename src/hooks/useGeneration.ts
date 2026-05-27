import { useQuery } from '@tanstack/react-query';
import { remoteAdminAPI } from '@src/lib/api/remote/admin';
import { GetHomepageResponse } from '@src/lib/types/admin';
import { HOMEPAGE_QUERY_KEY } from '@src/views/MainPage/hooks/useHomepage';

/** 현재 SOPT 기수만 가져옴 */
export const useGeneration = (): number | null => {
  const { data } = useQuery<GetHomepageResponse>({
    queryKey: HOMEPAGE_QUERY_KEY,
    queryFn: remoteAdminAPI.getHomepage,
  });

  return data?.generation ?? null;
};
