import { track } from '@amplitude/analytics-browser';
import Link from 'next/link';
import { ReactComponent as ArrowLeft } from '@src/assets/icons/arrow_left_28x28.svg';
import { ReactComponent as ArrowRight } from '@src/assets/icons/arrow_right_28x28.svg';
import arrowRightWhite from '@src/assets/icons/arrow_right_white.svg';
import { useHorizontalScroll } from '@src/hooks/useHorizontalScroll';
import { parsePartToKorean } from '@src/lib/utils/parsePartToKorean';
import { SectionTitle, SectionTitleTranslate, SectionTitleWrapper } from '../common/styles';
import useFetch from './hooks/useFetch';
import {
  Arrow,
  ArrowWrapper,
  CardTitle,
  CardWrapper,
  ContainerWrapper,
  Content,
  ContentWrapper,
  Desc,
  DescName,
  DescWrapper,
  MoreLinkWrapper,
} from './styles';

export default function ActivityReview() {
  const reviews = useFetch();
  const {
    scrollableRef,
    onClickLeftButton,
    onClickRightButton,
    isLeftScrollable,
    isRightScrollable,
  } = useHorizontalScroll(1032, 1);

  if (reviews._TAG !== 'OK') return null;

  return (
    <ContainerWrapper>
      <SectionTitleWrapper>
        <SectionTitleTranslate>Activity Review</SectionTitleTranslate>
        <SectionTitle>{'회원들의 후기로\nSOPT 활동을 미리 만나보세요.'}</SectionTitle>
      </SectionTitleWrapper>
      <ContentWrapper>
        <ArrowWrapper onClick={() => onClickLeftButton(scrollableRef.current)}>
          <ArrowLeft stroke={isLeftScrollable ? 'white' : 'grey'} />
        </ArrowWrapper>
        <Content ref={scrollableRef}>
          {/* {reviews.data.map((review) => (
            <Link
              key={review.id}
              href={review.url}
              onClick={() => track('click_recruit_review_detail')}
            >
              <CardWrapper role="presentation">
                <CardTitle>{review.title}</CardTitle>
                <DescWrapper>
                  <Desc>
                    {parsePartToKorean(review.part)}파트 {review.generation}기{'\n'}
                    <DescName>{review.author}</DescName>
                  </Desc>
                  <Arrow
                    src={arrowRightWhite}
                    alt={`${review.title} 활동후기 더보기 버튼`}
                    width={30}
                    height={30}
                  />
                </DescWrapper>
              </CardWrapper>
            </Link>
          ))} */}
        </Content>
        <ArrowWrapper onClick={() => onClickRightButton(scrollableRef.current)}>
          <ArrowRight stroke={isRightScrollable ? 'white' : 'grey'} />
        </ArrowWrapper>
      </ContentWrapper>
      <Link href="/review" onClick={() => track('click_recruit_review_more')}>
        <MoreLinkWrapper>활동후기 더보기</MoreLinkWrapper>
      </Link>
    </ContainerWrapper>
  );
}
