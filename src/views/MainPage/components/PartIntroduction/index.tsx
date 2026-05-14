import { Tag } from '@sopt-makers/ui';
import { useRouter } from 'next/router';
import { ReactComponent as ArrowRight } from '@src/assets/icons/arrow_right_16x16.svg';
import { useIsMobile, useIsTablet } from '@src/hooks/useDevice';
import { PART_NAMES } from '@src/lib/constants/main';
import { breakpoints } from '@src/lib/styles/breakpoints';
import { PartIntroType } from '@src/lib/types/admin';
import Button from '@src/views/MainPage/components/@common/Button';
import * as S from './style';

const PART_ORDER = Object.keys(PART_NAMES);

const TITLE = '6개의 파트로 이루어져 있어요';
const DESCRIPTION = `SOPT는 기획·디자인·안드로이드·iOS·웹·서버 6개 파트로 구성되어 있어요.\n서로 다른 전문성을 가진 파트원이 한 프로젝트에 모여 협업하는 경험을 쌓아요.`;

interface Props {
  parts: PartIntroType[];
}

const PartIntroduction = ({ parts }: Props) => {
  const router = useRouter();
  const isMobile = useIsMobile(breakpoints.mobile);

  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.Title>{TITLE}</S.Title>
        <S.Description>{DESCRIPTION}</S.Description>
      </S.TextWrapper>
      <PartList parts={parts} />
      {!isMobile && (
        <Button aria-label="파트 소개 페이지로 이동" onClick={() => router.push('/about')}>
          각 파트에 대해 더 궁금하다면
          <ArrowRight />
        </Button>
      )}
    </S.Wrapper>
  );
};
export default PartIntroduction;

const PartList = ({ parts }: Props) => {
  const sortedParts = [...parts].sort(
    (a, b) => PART_ORDER.indexOf(a.part) - PART_ORDER.indexOf(b.part),
  );

  return (
    <S.PartList>
      {sortedParts.map((part) => (
        <PartItem key={part.part} part={part} />
      ))}
    </S.PartList>
  );
};

const PartItem = ({ part }: { part: PartIntroType }) => {
  const isTablet = useIsTablet(breakpoints.mobile, breakpoints.tablet);
  const isMobile = useIsMobile(breakpoints.mobile);

  return (
    <S.PartItem>
      <Tag size={isTablet || isMobile ? 'sm' : 'lg'} variant="secondary">
        {PART_NAMES[part.part]}
      </Tag>
      <S.PartItemTitle>{part.part}</S.PartItemTitle>
      <S.PartItemDescription>{part.description}</S.PartItemDescription>
    </S.PartItem>
  );
};
