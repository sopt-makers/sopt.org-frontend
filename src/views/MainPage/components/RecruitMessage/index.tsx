import { useIsMobile } from '@src/hooks/useDevice';
import { RECRUIT_URL } from '@src/lib/constants/routes';
import { breakpoints } from '@src/lib/styles/breakpoints';
import * as S from './style';

interface RecruitMessageProp {
  generation: number;
  mainColor: string;
  textColor: string;
  ctaText: string;
  isRecruiting: boolean;
  isRecruitEnd?: boolean;
}

export default function RecruitMessage({
  generation,
  mainColor,
  textColor,
  ctaText,
  isRecruiting,
  isRecruitEnd,
}: RecruitMessageProp) {
  const recruitGeneration = generation + (isRecruitEnd ? 1 : 0);
  const recruitMonth = recruitGeneration % 2 === 0 ? '3' : '9';
  const isMobileSize = useIsMobile(`${breakpoints.tablet - 1}px`);

  return (
    <S.Wrapper>
      <S.MessageWrapper>
        {isRecruiting && (
          <S.Badge mainColor={mainColor}>
            <strong>NOW</strong> SOPT {generation}기 신입 회원 모집 중
          </S.Badge>
        )}
        <S.Headline>
          <S.Title>SOPT의 열정이 되어주세요!</S.Title>
          {!isRecruiting && (
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
        {ctaText.trim()}
        <S.Arrow aria-hidden="true" />
      </S.RecruitLink>
    </S.Wrapper>
  );
}
