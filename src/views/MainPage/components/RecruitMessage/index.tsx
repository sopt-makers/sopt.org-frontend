import { useIsMobile } from '@src/hooks/useDevice';
import { breakpoints } from '@src/lib/styles/breakpoints';
import RecruitButton from '../@common/RecruitButton';
import * as S from './style';

interface RecruitMessageProp {
  generation: number;
  mainColor: string;
  textColor: string;
  ctaText: string;
  isRecruitEnd?: boolean;
}

export default function RecruitMessage({
  generation,
  mainColor,
  textColor,
  ctaText,
  isRecruitEnd,
}: RecruitMessageProp) {
  const recruitGeneration = generation + (isRecruitEnd ? 1 : 0);
  const recruitMonth = generation % 2 === 0 ? '3' : '9';

  const isMobileSize = useIsMobile(`${breakpoints.tablet - 1}px`);

  return (
    <S.Wrapper>
      <S.MessageWrapper>
        <S.Title>SOPT의 열정이 되어주세요!</S.Title>
        {ctaText === '모집 알림 신청하기 ' && (
          <S.Description>
            아직 모집기간이 아니에요.{isMobileSize ? <br /> : ' '}
            {recruitGeneration}기 모집은 {recruitMonth}월에 시작돼요.
            <br />
            알림을 신청하면 가장 먼저 소식을 전해드려요.
          </S.Description>
        )}
      </S.MessageWrapper>
      <RecruitButton size="md" mainColor={mainColor} textColor={textColor}>
        {ctaText}&gt;
      </RecruitButton>
    </S.Wrapper>
  );
}
