import Fade from 'react-reveal/Fade';
import Arrow from '@src/assets/icons/icArrowDown.svg';
import RoundButton from '@src/components/common/RoundButton';
import UnderlinedTitle from '@src/components/common/UnderlinedTitle';

import * as S from './Recruit.style';

function Recruit() {
  const handleClick = () => {
    window.open('https://sopt-recruiting.web.app/recruiting/apply/yb');
  };

  return (
    <S.Root>
      <S.Wrap>
        <Fade top>
          <UnderlinedTitle>신입회원 모집</UnderlinedTitle>
        </Fade>
        <S.ContentWrap>
          <S.StepWrap>
            <Fade delay={300}>
              <S.PlainCircleText>1차 서류</S.PlainCircleText>
            </Fade>
            <Fade left delay={400}>
              <S.ArrowIcon src={Arrow} alt="오른쪽 화살표" />
            </Fade>
            <Fade left delay={500}>
              <S.PlainCircleText>2차 면접</S.PlainCircleText>
            </Fade>
            <Fade left delay={600}>
              <S.ArrowIcon src={Arrow} alt="오른쪽 화살표" />
            </Fade>
            <Fade left delay={700}>
              <S.GradientCircleText>최종 합격</S.GradientCircleText>
            </Fade>
          </S.StepWrap>
          <S.TextWrap>
            <Fade delay={1000}>
              <S.Description>
                SOPT는 매년 두 번, 3월과 9월에 신입회원을 모집합니다.
                <br />
                서류 평가와 면접 평가를 통해 신입회원을 선발합니다.
                <br />
                <br />
                SOPT 채널(페이스북, 인스타그램, 유튜브, 카카오톡 채널)을
                <br />
                통해 다음 기수 리크루팅 소식을 전달 받을 수 있습니다.
              </S.Description>
            </Fade>
            <Fade delay={1500}>
              <RoundButton isReverse={true} onClick={handleClick}>
                SOPT 지원하기
              </RoundButton>
            </Fade>
          </S.TextWrap>
        </S.ContentWrap>
      </S.Wrap>
    </S.Root>
  );
}

export default Recruit;
