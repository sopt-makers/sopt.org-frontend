import { useQuery } from '@tanstack/react-query';
import { remoteAdminAPI } from '@src/lib/api/remote/admin';
import { GetHomepageResponse } from '@src/lib/types/admin';

export const HOMEPAGE_QUERY_KEY = ['homepage'] as const;

export const useHomepage = () => {
  return useQuery<GetHomepageResponse>({
    queryKey: HOMEPAGE_QUERY_KEY,
    queryFn: remoteAdminAPI.getHomepage,
  });
};
