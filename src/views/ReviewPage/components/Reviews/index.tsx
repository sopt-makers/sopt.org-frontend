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
        <S.Card key={review.id} href={review.link} target="_blank">
          <S.Section>
            <S.ThumbnailWrapper css={{ height: imageHeight }}>
              <S.Thumbnail
                src={
                  review.thumbnail ??
                  'https://static.wikia.nocookie.net/pokemon/images/3/3c/%EB%9D%BC%EC%9D%B4%EC%B8%84_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8.png/revision/latest?cb=20170405000124&path-prefix=ko'
                }
                alt={review.title}
                objectFit="cover"
                layout="fill"
              />
            </S.ThumbnailWrapper>
            <S.ChipWrapper>
              <S.Chip>{review.part}</S.Chip>
              <S.Chip>{review.semester}기</S.Chip>
            </S.ChipWrapper>
          </S.Section>
          <S.Section>
            <S.Title>{review.title}</S.Title>
            <S.Desc>{review.subject}</S.Desc>
          </S.Section>
        </S.Card>
      ))}
    </S.Wrapper>
  );
};

export default Reviews;
