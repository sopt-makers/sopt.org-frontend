import { Ref, forwardRef } from 'react';
import { useIsMobile, useIsTablet } from '@src/hooks/useDevice';
import { PART_NAMES } from '@src/lib/constants/main';
import { PATHS } from '@src/lib/constants/routes';
import { breakpoints } from '@src/lib/styles/breakpoints';
import * as S from './style';

const PART_ORDER = Object.keys(PART_NAMES);

const TITLE = '6개의 파트로 이루어져 있어요';
const DESCRIPTION =
  'SOPT는 기획·디자인·안드로이드·iOS·웹·서버 6개 파트로 구성되어 있어요.\n서로 다른 전문성을 가진 파트원이 한 프로젝트에 모여 협업하는 경험을 쌓아요.';

interface PartIntro {
  part: string;
  description: string;
}

interface SectionProps {
  parts: PartIntro[];
  mainColor: string;
}

const PartIntroduction = forwardRef(({ parts, mainColor }: SectionProps, ref: Ref<HTMLElement>) => {
  return (
    <S.Wrapper ref={ref} id="part">
      <S.TextWrapper>
        <S.Title>{TITLE}</S.Title>
        <S.Description>{DESCRIPTION}</S.Description>
      </S.TextWrapper>
      <PartList parts={parts} mainColor={mainColor} />
    </S.Wrapper>
  );
});

PartIntroduction.displayName = 'PartIntroduction';

export default PartIntroduction;

interface ListProps {
  parts: PartIntro[];
  mainColor: string;
}

const PartList = ({ parts, mainColor }: ListProps) => {
  const sortedParts = [...parts].sort(
    (a, b) => PART_ORDER.indexOf(a.part) - PART_ORDER.indexOf(b.part),
  );

  return (
    <S.PartList>
      {sortedParts.map((part) => (
        <PartItem key={part.part} partIntro={part} mainColor={mainColor} />
      ))}
    </S.PartList>
  );
};

interface ItemProps {
  partIntro: PartIntro;
  mainColor: string;
}

const PartItem = ({ partIntro, mainColor }: ItemProps) => {
  /* TODO: useDevice 파일 수정 필요 */
  const isTablet = useIsTablet(`${breakpoints.mobile}px`, `${breakpoints.tablet}px`);
  const isMobile = useIsMobile(`${breakpoints.mobile}px`);

  return (
    <S.PartItem>
      <S.Link href={PATHS.ABOUT}>
        <S.HoverIconBadge aria-hidden="true" mainColor={mainColor}>
          <S.HoverIcon />
        </S.HoverIconBadge>
        <S.TagComponent
          size={isTablet || isMobile ? 'sm' : 'lg'}
          variant="secondary"
          mainColor={mainColor}
        >
          {PART_NAMES[partIntro.part]}
        </S.TagComponent>
        <S.PartItemTitle>{partIntro.part}</S.PartItemTitle>
        <S.PartItemDescription>{partIntro.description}</S.PartItemDescription>
      </S.Link>
    </S.PartItem>
  );
};
