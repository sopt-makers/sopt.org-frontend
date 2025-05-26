import { useQuery } from '@tanstack/react-query';
import { api } from '@src/lib/api';
import { GetSampleReviewsResponse } from '@src/lib/types/review';

const getSampleReviews = async (): Promise<GetSampleReviewsResponse> => {
  const data = await api.reviewAPI.getSampleReviews();

  return data;
};

export default function useGetSampleReviews() {
  const { data, isLoading } = useQuery({
    queryKey: ['sample-reviews'],
    queryFn: getSampleReviews,
  });

  return { data, isLoading };
}
