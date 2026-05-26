import { useQuery } from '@tanstack/react-query';
import { BASE_URL } from '@src/lib/constants/client';
import axios from 'axios';

const client = axios.create({ baseURL: BASE_URL });

interface VisitorResponse {
  count: number;
}

const getVisitor = async (): Promise<VisitorResponse> => {
  const { data } = await client.get<VisitorResponse>('/visitor');

  return data;
};

export default function useGetVisitor() {
  const { data, isLoading } = useQuery<VisitorResponse>({
    queryKey: ['visitor'],
    queryFn: getVisitor,
  });

  return { data, isLoading };
}
