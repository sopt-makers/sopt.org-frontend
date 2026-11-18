import { useMutation } from '@tanstack/react-query';
import { api } from '@src/lib/api/instance';
import { queryClient } from '@src/pages/_app';

const postVisitor = async () => {
  await api.post('/visitor');
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
