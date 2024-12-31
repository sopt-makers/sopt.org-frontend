import { useContext } from 'react';
import { BrandingColorContext } from '../..';
import {
  SectionSubTitle,
  SectionTitle,
  SectionTitleTranslate,
  SectionTitleWrapper,
} from '../common/style';
import * as S from './style';

const RecruiteeInfo = () => {
  const { main } = useContext(BrandingColorContext);
  return (
    <S.Wrapper>
      <SectionTitleWrapper>
        <SectionTitleTranslate mainColor={'#' + main}>Recruitment target</SectionTitleTranslate>
        <SectionTitle>모집 대상</SectionTitle>
      </SectionTitleWrapper>
      <SectionSubTitle>아래 3가지 모두 해당 되는 분이라면, 누구든 지원 가능해요!</SectionSubTitle>
      <S.CardList>
        <S.CardItem>
          <i>📱</i>
          <p>
            <b>IT 창업 및 웹/앱</b>
            <br />
            서비스에 관심이 많고
          </p>
        </S.CardItem>
        <S.CardItem>
          <i>🚖</i>
          <p>
            <b>수도권 내</b>에서
            <br />
            활동이 가능한
          </p>
        </S.CardItem>
        <S.CardItem>
          <i>🔥</i>
          <p>
            <b>열정적인</b>
            <br />
            대학생
          </p>
        </S.CardItem>
      </S.CardList>
    </S.Wrapper>
  );
};

export default RecruiteeInfo;
