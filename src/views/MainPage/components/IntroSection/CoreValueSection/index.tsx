import { INTRO_CONTENT_LIST } from '@src/lib/constants/main';
import { type GetHomepageResponse } from '@src/lib/types/admin';
import SectionTop from '@src/views/AboutPage/components/@common/SectionTop';
import CoreValueCardList from '@src/views/MainPage/components/IntroSection/CoreValueSection/CoreValueCardList';
import * as S from './style';

interface Props {
  adminData: GetHomepageResponse;
}

const CoreValueSection = ({ adminData }: Props) => {
  return (
    <S.Wrapper>
      <SectionTop
        engTitle="Core Value"
        korTitle="SOPT에는 이런 회원들이 있어요"
        mainColor={'#' + adminData.brandingColor.main}
      />
      <CoreValueCardList
        cards={INTRO_CONTENT_LIST}
        mainColor={'#' + adminData.brandingColor.main}
      />
    </S.Wrapper>
  );
};

export default CoreValueSection;
