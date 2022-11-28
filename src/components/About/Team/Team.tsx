import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import { ABOUT_INFO } from '@src/constants/about';
import { useMediaQuery } from 'react-responsive';

import AboutWrapper from '../AboutWrapper';
import * as S from './Team.style';
import TeamImage from './TeamImage';

function Team() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  return (
    <AboutWrapper height={'calc(100vh-163px)'}>
      <AboutWrapper.Top
        leftTitleProps={
          <>
            <S.Description>{ABOUT_INFO.TEAM.description}</S.Description>
            <UnderlinedTitle fontSize="40px">{ABOUT_INFO.TEAM.title}</UnderlinedTitle>
          </>
        }
        leftDescriptionProps={
          <S.Contents>
            {isDesktop ? ABOUT_INFO.TEAM.pc_contents : ABOUT_INFO.TEAM.mobile_contents}
          </S.Contents>
        }
        rightProps={<TeamImage />}
      />
    </AboutWrapper>
  );
}

export default Team;
