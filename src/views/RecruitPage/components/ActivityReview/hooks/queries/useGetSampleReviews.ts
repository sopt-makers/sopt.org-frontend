import { useQuery } from '@tanstack/react-query';
import { api } from '@src/lib/api';

const getSampleReviews = async () => {
  const data = await api.reviewAPI.getSampleReviews();

  return data.reviews;
};

export const useGetSampleReviews = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['sample-reviews'],
    queryFn: getSampleReviews,
  });

  return { data, isLoading };
};
