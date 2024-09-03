import imgRecruitBg from '@src/assets/images/img_recruit_banner.png';
import * as S from './style';

const ApplySection = () => {
  return (
    <S.Wrapper imgRecruitBg={imgRecruitBg}>
      <S.Title>
        <span>SOPT의 35번째 열정을&nbsp;</span>
        <span>기다리고 있어요!</span>
      </S.Title>
      <S.ApplyButton href="https://recruit.sopt.org/" target="_blank">
        지원하기
      </S.ApplyButton>
    </S.Wrapper>
  );
};
export default ApplySection;
