import * as S from './style';
import {
  SectionDesc,
  SectionSubTitle,
  SectionTitle,
  SectionTitleTranslate,
  SectionTitleWrapper,
} from '../common/styles';

const RecruiteeInfo = () => {
  return (
    <S.Wrapper>
      <SectionTitleWrapper>
        <SectionTitleTranslate>Recruitment target</SectionTitleTranslate>
        <SectionTitle>모집 대상</SectionTitle>
      </SectionTitleWrapper>
      <SectionSubTitle>아래 3가지 모두 해당 되는 분이라면, 누구든 지원 가능해요!</SectionSubTitle>
      <SectionDesc>
        IT 창업 및 웹/앱 서비스에 관심이 많고, 수도권 내에서 활동이 가능한 열정적인 대학생
      </SectionDesc>
    </S.Wrapper>
  );
};

export default RecruiteeInfo;
