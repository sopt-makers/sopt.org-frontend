import GrientArrowIcon from '@src/assets/icons/grientArrow.svg';
import Arrow from '@src/assets/icons/icArrowDown.svg';
import { APPJAM_STEP } from '@src/constants/about';
import React from 'react';
import Fade from 'react-reveal/Fade';

import * as S from './AppjamStep.style';

function AppjamStep() {
  return (
    <S.Root>
      {APPJAM_STEP.map((item, idx) => {
        return item.isGradient ? (
          <S.StepWrap key={item.title}>
            <Fade left delay={item.delay}>
              <S.GradientCircleText>
                <p>{item.title}</p>
              </S.GradientCircleText>
            </Fade>
            {idx < APPJAM_STEP.length - 1 && (
              <Fade left delay={item.delay + 100}>
                <S.GrientArrowIcon src={GrientArrowIcon} alt="오른쪽 화살표" />
              </Fade>
            )}
          </S.StepWrap>
        ) : (
          <S.StepWrap key={item.title}>
            <Fade left delay={item.delay}>
              <S.PlainCircleText>
                <p>{item.title}</p>
              </S.PlainCircleText>
            </Fade>
            <Fade left delay={item.delay + 100}>
              <S.ArrowIcon src={Arrow} alt="오른쪽 화살표" />
            </Fade>
          </S.StepWrap>
        );
      })}
    </S.Root>
  );
}

export default AppjamStep;
