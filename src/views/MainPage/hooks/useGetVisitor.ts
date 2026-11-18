import { useQuery } from '@tanstack/react-query';
import { api } from '@src/lib/api/instance';

const getVisitor = async () => {
  const { data } = await api.get('/visitor');

  return data;
};

export default function useGetVisitor() {
  const { data, isLoading } = useQuery({
    queryKey: ['visitor'],
    queryFn: getVisitor,
  });

  return { data, isLoading };
}
