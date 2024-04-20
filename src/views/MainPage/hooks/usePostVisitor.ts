import { useMutation } from '@tanstack/react-query';
import { BASE_URL } from '@src/lib/constants/client';
import { queryClient } from '@src/pages/_app';
import axios from 'axios';

const client = axios.create({ baseURL: BASE_URL });

async function postVisitor() {
  await client.post('/visitor');
}

export default function usePostVisitor() {
  const { mutate } = useMutation({
    mutationFn: postVisitor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['visitor'] });
    },
  });

  return mutate;
}
