import { useContext } from 'react';
import { BrandingColorContext } from '../..';
import * as S from './style';

const ApplySection = ({ headerImg }: { headerImg: string }) => {
  const { main } = useContext(BrandingColorContext);
  return (
    <S.Wrapper imgRecruitBg={headerImg}>
      <S.Title>
        <span>SOPT의 35번째 열정을&nbsp;</span>
        <span>기다리고 있어요!</span>
      </S.Title>
      <S.ApplyButton href="https://recruit.sopt.org/" target="_blank" main={'#' + main}>
        지원하기
      </S.ApplyButton>
    </S.Wrapper>
  );
};
export default ApplySection;
