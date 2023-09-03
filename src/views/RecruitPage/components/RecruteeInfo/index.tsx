import styled from '@emotion/styled';
import {
  SectionDesc,
  SectionTitle,
  SectionTitleTranslate,
  SectionTitleWrapper,
} from '../common/styles';

const RecruiteeInfo = () => {
  return (
    <Wrapper>
      <SectionTitleWrapper>
        <SectionTitleTranslate>Recruitment target</SectionTitleTranslate>
        <SectionTitle>모집 대상</SectionTitle>
      </SectionTitleWrapper>
      <SectionDesc>
        IT 창업 및 웹/앱 서비스에 관심이 많고, 수도권 내에서 활동이 가능한 열정적인 대학생
      </SectionDesc>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    gap: 40px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    gap: 8px;
  }
`;

export default RecruiteeInfo;
