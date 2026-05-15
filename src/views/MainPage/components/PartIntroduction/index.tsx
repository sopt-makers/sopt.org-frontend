import { Tag } from '@sopt-makers/ui';
import { useIsMobile, useIsTablet } from '@src/hooks/useDevice';
import { PART_NAMES } from '@src/lib/constants/main';
import { breakpoints } from '@src/lib/styles/breakpoints';
import { PartIntroType } from '@src/lib/types/admin';
import * as S from './style';

const PART_ORDER = Object.keys(PART_NAMES);

const TITLE = '6개의 파트로 이루어져 있어요';
const DESCRIPTION = `SOPT는 기획·디자인·안드로이드·iOS·웹·서버 6개 파트로 구성되어 있어요.\n서로 다른 전문성을 가진 파트원이 한 프로젝트에 모여 협업하는 경험을 쌓아요.`;

interface Props {
  parts: PartIntroType[];
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
        <PartItem key={part.part} part={part} mainColor={mainColor} />
      ))}
    </S.PartList>
  );
};

const PartItem = ({ part, mainColor }: { part: PartIntroType; mainColor: string }) => {
  const isTablet = useIsTablet(breakpoints.mobile, breakpoints.tablet);
  const isMobile = useIsMobile(breakpoints.mobile);

  return (
    <S.PartItem>
      <S.Link href={`/about`}>
        <S.HoverIconBadge aria-hidden="true" mainColor={mainColor}>
          <S.HoverIcon />
        </S.HoverIconBadge>
        <Tag size={isTablet || isMobile ? 'sm' : 'lg'} variant="secondary">
          {PART_NAMES[part.part]}
        </Tag>
        <S.PartItemTitle>{part.part}</S.PartItemTitle>
        <S.PartItemDescription>{part.description}</S.PartItemDescription>
      </S.Link>
    </S.PartItem>
  );
};
