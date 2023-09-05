import Link from 'next/link';
import { ReactComponent as ArrowLeft } from '@src/views/MainPage/assets/arrow-left-28x28.svg';
import { ReactComponent as ArrowRight } from '@src/views/MainPage/assets/arrow-right-28x28.svg';
import arrowRightWhite from '@src/views/MainPage/assets/arrow_right_white.svg';
import { useHorizontalScroll } from '@src/views/MainPage/lib';
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
import { parsePartToKorean } from './utils/parsePartToKorean';

export function ActivityReview() {
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
          {reviews.data.map((review) => (
            <Link key={review.id} href={review.link}>
              <CardWrapper role="presentation">
                <CardTitle>{review.title}</CardTitle>
                <DescWrapper>
                  <Desc>
                    {parsePartToKorean(review.part)}파트 {review.semester}기{'\n'}
                    <DescName>{review.reviewer}</DescName>
                  </Desc>
                  <Arrow src={arrowRightWhite} alt="" />
                </DescWrapper>
              </CardWrapper>
            </Link>
          ))}
        </Content>
        <ArrowWrapper onClick={() => onClickRightButton(scrollableRef.current)}>
          <ArrowRight stroke={isRightScrollable ? 'white' : 'grey'} />
        </ArrowWrapper>
      </ContentWrapper>
      <Link href="/review">
        <MoreLinkWrapper>활동후기 더보기</MoreLinkWrapper>
      </Link>
    </ContainerWrapper>
  );
}
