import useFetch from '../../hooks/useFetch';
import { TAB } from '../../types';

type ReviewsProps = {
  selectedTab: TAB;
};

const Reviews = ({ selectedTab }: ReviewsProps) => {
  const reviews = useFetch(selectedTab);
  if (reviews._TAG !== 'OK') return null;

  return (
    <div>
      {reviews.data.map((review) => (
        <div key={review.id}>{review.title}</div>
      ))}
    </div>
  );
};

export default Reviews;
