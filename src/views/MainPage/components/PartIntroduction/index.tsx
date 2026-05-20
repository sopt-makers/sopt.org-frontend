import { Tag } from '@sopt-makers/ui';
import { PATHS } from '@src/constants/routes';
import { useIsMobile, useIsTablet } from '@src/hooks/useDevice';
import { PART_NAMES } from '@src/lib/constants/main';
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

interface Props {
  parts: PartIntro[];
  mainColor: string;
}

const PartIntroduction = ({ parts, mainColor }: Props) => {
  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.Title>{TITLE}</S.Title>
        <S.Description>{DESCRIPTION}</S.Description>
      </S.TextWrapper>
      <PartList parts={parts} mainColor={mainColor} />
    </S.Wrapper>
  );
};
export default PartIntroduction;

const PartList = ({ parts, mainColor }: Props) => {
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

const PartItem = ({ partIntro, mainColor }: { partIntro: PartIntro; mainColor: string }) => {
  /* TODO: useDevice 파일 수정 필요 */
  const isTablet = useIsTablet(`${breakpoints.mobile}px`, `${breakpoints.tablet}px`);
  const isMobile = useIsMobile(`${breakpoints.mobile}px`);

  return (
    <S.PartItem>
      <S.Link href={PATHS.ABOUT}>
        <S.HoverIconBadge aria-hidden="true" mainColor={mainColor}>
          <S.HoverIcon />
        </S.HoverIconBadge>
        <Tag size={isTablet || isMobile ? 'sm' : 'lg'} variant="secondary">
          {PART_NAMES[partIntro.part]}
        </Tag>
        <S.PartItemTitle>{partIntro.part}</S.PartItemTitle>
        <S.PartItemDescription>{partIntro.description}</S.PartItemDescription>
      </S.Link>
    </S.PartItem>
  );
};
