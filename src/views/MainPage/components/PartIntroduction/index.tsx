import { Tag } from '@sopt-makers/ui';
import { useRouter } from 'next/router';
import { ReactComponent as ArrowRight } from '@src/assets/icons/arrow_right_16x16.svg';
import { useIsMobile, useIsTablet } from '@src/hooks/useDevice';
import { PART_LABEL_MAP } from '@src/lib/constants/main';
import { breakpoints } from '@src/lib/styles/breakpoints';
import { PartIntroType } from '@src/lib/types/admin';
import Button from '@src/views/MainPage/components/@common/Button';
import * as S from './style';

const PART_ORDER = Object.keys(PART_LABEL_MAP);

const TITLE = '6개의 파트로 이루어져 있어요';
const DESCRIPTION = `SOPT는 기획·디자인·안드로이드·iOS·웹·서버 6개 파트로 구성되어 있어요.\n서로 다른 전문성을 가진 파트원이 한 프로젝트에 모여 협업하는 경험을 쌓아요.`;

interface Props {
  partIntroduction: PartIntroType[];
}

const PartIntroduction = ({ partIntroduction }: Props) => {
  const router = useRouter();

  const isMobileSize = useIsMobile(breakpoints.mobile);

  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.Title>{TITLE}</S.Title>
        <S.Description>{DESCRIPTION}</S.Description>
      </S.TextWrapper>
      <PartList partIntroduction={partIntroduction} />
      {!isMobileSize && (
        <Button aria-label="파트 소개 페이지로 이동" onClick={() => router.push('/about')}>
          각 파트에 대해 더 궁금하다면
          <ArrowRight />
        </Button>
      )}
    </S.Wrapper>
  );
};
export default PartIntroduction;

const PartList = ({ partIntroduction }: Props) => {
  const sortedPartIntroduction = [...partIntroduction].sort(
    (a, b) => PART_ORDER.indexOf(a.part) - PART_ORDER.indexOf(b.part),
  );

  return (
    <S.PartList>
      {sortedPartIntroduction.map((part) => (
        <PartItem key={part.part} partIntroduction={part} />
      ))}
    </S.PartList>
  );
};

const PartItem = ({ partIntroduction }: { partIntroduction: PartIntroType }) => {
  const isTabletSize = useIsTablet(breakpoints.mobile, breakpoints.tablet);
  const isMobileSize = useIsMobile(breakpoints.mobile);

  return (
    <S.PartItem>
      <Tag size={isTabletSize || isMobileSize ? 'sm' : 'lg'} variant="secondary">
        {PART_LABEL_MAP[partIntroduction.part]}
      </Tag>
      <S.PartItemTitle>{partIntroduction.part}</S.PartItemTitle>
      <S.PartItemDescription>{partIntroduction.description}</S.PartItemDescription>
    </S.PartItem>
  );
};
