import { useMutation } from '@tanstack/react-query';
import { BASE_URL } from '@src/lib/constants/client';
import { queryClient } from '@src/pages/_app';
import axios from 'axios';

const client = axios.create({ baseURL: BASE_URL });

const postVisitor = async () => {
  await client.post('/visitor');
};

const usePostVisitor = () => {
  const { mutate } = useMutation({
    mutationFn: postVisitor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['visitor'] });
    },
  });

  return mutate;
};
export default usePostVisitor;
