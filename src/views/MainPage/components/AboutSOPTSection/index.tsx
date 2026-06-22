import useInView from '@src/hooks/useInView';
import { LatestNewsType, PartIntroType } from '@src/lib/types/admin';
import Activity from '@src/views/MainPage/components/Activity';
import PartIntroduction from '@src/views/MainPage/components/PartIntroduction';
import RecentNews from '@src/views/MainPage/components/RecentNews';
import RecruitMessage from '@src/views/MainPage/components/RecruitMessage';
import ReviewSection from '@src/views/MainPage/components/ReviewSection';
import * as S from './style';

const MenuList = [
  { name: 'Activity', id: 'activity' },
  { name: 'Part', id: 'part' },
  { name: 'Review', id: 'review' },
] as const;

interface Props {
  generation: number;
  partIntroduction: PartIntroType[];
  latestNews: LatestNewsType[];
  mainColor: string;
  ctaText: string;
  isRecruitEnd: boolean;
}

function AboutSOPTSection({
  generation,
  partIntroduction,
  latestNews,
  mainColor,
  ctaText,
  isRecruitEnd,
}: Props) {
  const activity = useInView();
  const part = useInView();
  const review = useInView();

  const viewList = [activity.isInView, part.isInView, review.isInView];
  const minIndex = viewList.findIndex((value) => value === true);

  return (
    <>
      <S.Wrapper>
        <S.MenuLayout>
          <S.MenuOffset aria-hidden="true" />
          <S.FloatingMenu>
            {MenuList.map(({ name, id }, index) => (
              <S.MenuWrapper key={id} isInView={minIndex === index} mainColor={mainColor}>
                <S.Menu href={`#${id}`} scroll={false}>
                  {name}
                </S.Menu>
              </S.MenuWrapper>
            ))}
          </S.FloatingMenu>
        </S.MenuLayout>

        <S.ScrollContentLayout>
          <S.ScrollContainer>
            <Activity ref={activity.ref} />
            <PartIntroduction ref={part.ref} parts={partIntroduction} mainColor={mainColor} />
            <ReviewSection ref={review.ref} />
          </S.ScrollContainer>
        </S.ScrollContentLayout>
      </S.Wrapper>
      <RecentNews latestNews={latestNews} />
      <RecruitMessage
        generation={generation}
        mainColor={mainColor}
        ctaText={ctaText}
        isRecruitEnd={isRecruitEnd}
      />
    </>
  );
}

export default AboutSOPTSection;
