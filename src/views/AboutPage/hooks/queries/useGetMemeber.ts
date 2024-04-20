import { useQuery } from '@tanstack/react-query';
import { api } from '@src/lib/api';

const getMember = async () => {
  const response = await api.aboutAPI.getMemberInfo();

  return response;
};

export default function useGetMember() {
  const { data, isLoading } = useQuery({
    queryKey: ['member'],
    queryFn: getMember,
  });

  return { data, isLoading };
}
