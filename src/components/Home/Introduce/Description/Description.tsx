import { useRouter } from 'next/router';
import React from 'react';
import Fade from 'react-reveal/Fade';
import RoundButton from '@src/components/common/RoundButton';
import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import * as S from './Description.style';

function Description() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/about');
  };

  return (
    <S.Wrap>
      <Fade top>
        <UnderlinedTitle>SOPT를 소개합니다!</UnderlinedTitle>
      </Fade>
      <Fade delay={500}>
        <S.Description>
          SOPT는 다양한 분야의 사람들이 모여 하나의 서비스를 만들기 위해 화합하는 동아리입니다.
          <br />
          <br />
          2008년 창립된 이후 300개가 넘는 서비스를 만들어냈으며
          <br />
          다양한 기업과 연계를 통한 공모전, 리크루팅, 프로젝트를 수행하고 있습니다.
          <br />
          서비스를 만들기 위해 필요한 체계적인 교육과 더불어
          <br />
          스터디, 네트워킹 행사 등 다양한 활동을 합니다.
          <br />
          다양한 분야의 사람들이 모여 화합을 통해 변화하고 성장하는 가치를 추구합니다.
        </S.Description>
      </Fade>
      <Fade delay={1000}>
        <RoundButton onClick={handleClick}>SOPT 활동 자세히 보기</RoundButton>
      </Fade>
    </S.Wrap>
  );
}

export default Description;
