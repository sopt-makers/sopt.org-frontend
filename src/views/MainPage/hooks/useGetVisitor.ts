import { useQuery } from '@tanstack/react-query';
import { createApiClient } from '@src/lib/api/client';
import { BASE_URL } from '@src/lib/constants/client';

const client = createApiClient({ baseURL: BASE_URL });

const getVisitor = async () => {
  const { data } = await client.get('/visitor');

  return data;
};

export default function useGetVisitor() {
  const { data, isLoading } = useQuery({
    queryKey: ['visitor'],
    queryFn: getVisitor,
  });

  return { data, isLoading };
}
