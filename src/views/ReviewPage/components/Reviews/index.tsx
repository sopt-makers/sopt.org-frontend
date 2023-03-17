import { useMemo } from 'react';
import { useIsMobile } from '@src/hooks/useDevice';
import useFetch from '../../hooks/useFetch';
import { TAB } from '../../types';
import * as S from './style';

type ReviewsProps = {
  selectedTab: TAB;
};

const Reviews = ({ selectedTab }: ReviewsProps) => {
  const reviews = useFetch(selectedTab);
  const isMobile = useIsMobile();
  const imageHeight = useMemo(() => (isMobile ? 216 : 240), [isMobile]);

  if (reviews._TAG !== 'OK') return null;

  return (
    <S.Wrapper>
      {reviews.data.map((review) => (
        <S.Card key={review.id} href={review.url} target="_blank">
          <S.Section>
            <S.ThumbnailWrapper css={{ height: imageHeight }}>
              <S.Thumbnail
                src={review.thumbnail}
                alt={review.title}
                objectFit="cover"
                layout="fill"
              />
            </S.ThumbnailWrapper>
            <S.ChipWrapper>
              <S.Chip>{review.department}</S.Chip>
              <S.Chip>{review.semester}기</S.Chip>
            </S.ChipWrapper>
          </S.Section>
          <S.Section>
            <S.Title>{review.title}</S.Title>
            <S.Desc>{review.preview}</S.Desc>
          </S.Section>
        </S.Card>
      ))}
    </S.Wrapper>
  );
};

export default Reviews;
