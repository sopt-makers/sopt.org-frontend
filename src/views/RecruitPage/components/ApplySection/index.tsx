import imgRecruitBg from '@src/assets/images/img_recruit_bg.png';
import * as S from './style';
import { ReactComponent as ValueShare } from '@src/assets/icons/value_share.svg';
import { ReactComponent as ValueChallenge } from '@src/assets/icons/value_challenge.svg';
import { ReactComponent as ValueLink } from '@src/assets/icons/value_link.svg';

const ApplySection = () => {
  return (
    <S.Wrapper imgRecruitBg={imgRecruitBg}>
      <S.Values>
        <ValueShare/>
        <ValueChallenge/>
        <ValueLink/>
      </S.Values>
      <div style={{ height: '62px' }} />
      <S.Title>SOPT의 34번째 열정을 기다리고 있어요!</S.Title>
      <div style={{ height: '16px' }} />
      <S.ApplyButton href="https://sopt-recruiting.web.app/recruiting/application/yb" target="_blank">
        지원하기
      </S.ApplyButton>
    </S.Wrapper>
  );
};
export default ApplySection;
