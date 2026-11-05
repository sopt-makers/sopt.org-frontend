import { useIsMobile } from '@src/hooks/useDevice';
import { RECRUIT_URL } from '@src/lib/constants/routes';
import { breakpoints } from '@src/lib/styles/breakpoints';
import dayjs from 'dayjs';
import * as S from './style';

interface RecruitMessageProp {
  generation: number;
  mainColor: string;
  textColor: string;
  ctaText: string;
  isRecruiting: boolean;
  recruitEndTime?: string;
  isRecruitEnd?: boolean;
}

export default function RecruitMessage({
  generation,
  mainColor,
  textColor,
  ctaText,
  isRecruiting,
  recruitEndTime,
  isRecruitEnd,
}: RecruitMessageProp) {
  const recruitGeneration = generation + (isRecruitEnd ? 1 : 0);
  const recruitMonth = recruitGeneration % 2 === 0 ? '3' : '9';
  const recruitEndDate = dayjs(recruitEndTime ?? null);
  const daysLeft = recruitEndDate.isValid()
    ? recruitEndDate.startOf('day').diff(dayjs().startOf('day'), 'day')
    : null;
  const isMobileSize = useIsMobile(`${breakpoints.tablet - 1}px`);

  return (
    <S.Wrapper mainColor={mainColor}>
      <S.MessageWrapper>
        <S.Badge>
          <S.BadgeEmphasis mainColor={mainColor}>NOW</S.BadgeEmphasis> SOPT{' '}
          {isRecruiting ? generation : recruitGeneration}기 신입 회원 모집{' '}
          {isRecruiting ? '중' : '예정'}
        </S.Badge>
        <S.Headline>
          <S.Title>SOPT의 열정이 되어주세요!</S.Title>
          {isRecruiting ? (
            <S.Description>
              {generation}기 모집이 시작됐어요. {daysLeft === 0 && '오늘 마감이에요.'}
              {daysLeft !== null && daysLeft > 0 && `마감까지 ${daysLeft}일 남았어요.`}
              <br />
              지금 바로 지원해 주세요.
            </S.Description>
          ) : (
            <S.Description>
              아직 모집기간이 아니에요. {recruitGeneration}기 모집은 {isMobileSize ? <br /> : ' '}
              {recruitMonth}월에 시작돼요.
              <S.DesktopBreak /> 알림을 신청하면 가장 먼저{isMobileSize ? <br /> : ' '}
              소식을 전해드려요.
            </S.Description>
          )}
        </S.Headline>
      </S.MessageWrapper>
      <S.RecruitLink href={RECRUIT_URL} mainColor={mainColor} textColor={textColor}>
        {isRecruiting ? '지원하기' : ctaText.trim()}
        <S.Arrow aria-hidden="true" />
      </S.RecruitLink>
    </S.Wrapper>
  );
}
