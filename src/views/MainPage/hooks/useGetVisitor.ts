import { useQuery } from '@tanstack/react-query';
import { BASE_URL } from '@src/lib/constants/client';
import axios from 'axios';

const client = axios.create({ baseURL: BASE_URL });

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
