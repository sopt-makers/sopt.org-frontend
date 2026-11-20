import { RefObject } from 'react';
import { EXTERNAL_LINKS, PATHS } from '@src/lib/constants/routes';
import dayjs from 'dayjs';
import * as S from './style';

interface RecruitMessageProps {
  generation: number;
  mainColor: string;
  textColor: string;
  isRecruiting: boolean;
  recruitEndTime?: string;
  notificationGeneration: number;
  notificationMonth: string;
  sectionRef: RefObject<HTMLElement>;
}

export default function RecruitMessage({
  generation,
  mainColor,
  textColor,
  isRecruiting,
  recruitEndTime,
  notificationGeneration,
  notificationMonth,
  sectionRef,
}: RecruitMessageProps) {
  const recruitEndDate = dayjs(recruitEndTime ?? null);
  const daysLeft = recruitEndDate.isValid()
    ? recruitEndDate.startOf('day').diff(dayjs().startOf('day'), 'day')
    : null;
  return (
    <S.Wrapper ref={sectionRef} mainColor={mainColor} aria-labelledby="recruit-title">
      <S.MessageWrapper>
        <S.Badge>
          <S.BadgeEmphasis mainColor={mainColor}>NOW</S.BadgeEmphasis> SOPT{' '}
          {isRecruiting ? generation : notificationGeneration}기 신입 회원 모집{' '}
          {isRecruiting ? '중' : '예정'}
        </S.Badge>
        <S.Headline>
          <S.Title id="recruit-title">SOPT의 열정이 되어주세요!</S.Title>
          {isRecruiting ? (
            <S.Description>
              {generation}기 모집이 시작됐어요. {daysLeft === 0 && '오늘 마감이에요.'}
              {daysLeft !== null && daysLeft > 0 && `마감까지 ${daysLeft}일 남았어요.`}
              <br />
              지금 바로 지원해 주세요.
            </S.Description>
          ) : (
            <S.Description>
              아직 모집기간이 아니에요. {notificationGeneration}기 모집은 {notificationMonth}월에
              시작돼요.
              <S.DesktopLineBreak /> 알림을 신청하면 가장 먼저 소식을 전해드려요.
            </S.Description>
          )}
        </S.Headline>
      </S.MessageWrapper>
      <S.RecruitLink
        data-recruit-cta
        href={isRecruiting ? EXTERNAL_LINKS.RECRUIT : PATHS.RECRUIT}
        mainColor={mainColor}
        textColor={textColor}
      >
        {isRecruiting ? '지원하기' : '모집 알림 신청하기'}
        <S.Arrow aria-hidden="true" />
      </S.RecruitLink>
    </S.Wrapper>
  );
}
