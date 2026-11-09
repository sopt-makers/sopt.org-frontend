import { useQuery } from '@tanstack/react-query';
import { remoteAdminAPI } from '@src/lib/api/remote/admin';

export default function useBrandingColor() {
  return useQuery({
    queryKey: ['brandingColor'],
    queryFn: remoteAdminAPI.getBrandingColor,
  });
}
