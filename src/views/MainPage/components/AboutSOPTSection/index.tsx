import useInView from '@src/hooks/useInView';
import { PartIntroType } from '@src/lib/types/admin';
import { SoptCommentType } from '@src/lib/types/main';
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
  mainColor: string;
  textColor: string;
  ctaText: string;
  isRecruiting: boolean;
  recruitEndTime?: string;
  isRecruitEnd: boolean;
  reviews: SoptCommentType[];
}

function AboutSOPTSection({
  generation,
  partIntroduction,
  mainColor,
  textColor,
  ctaText,
  isRecruiting,
  recruitEndTime,
  isRecruitEnd,
  reviews,
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
              <S.MenuWrapper
                key={id}
                isInView={minIndex === index}
                mainColor={mainColor}
                textColor={textColor}
              >
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
            <ReviewSection ref={review.ref} reviews={reviews} />
          </S.ScrollContainer>
        </S.ScrollContentLayout>
      </S.Wrapper>
      <RecentNews />
      <RecruitMessage
        generation={generation}
        mainColor={mainColor}
        textColor={textColor}
        ctaText={ctaText}
        isRecruiting={isRecruiting}
        recruitEndTime={recruitEndTime}
        isRecruitEnd={isRecruitEnd}
      />
    </>
  );
}

export default AboutSOPTSection;
