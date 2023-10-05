import styled from '@emotion/styled';
import PageLayout from '@src/components/common/PageLayout';
import { CorporateJob, CorporateLinkedActivities, CorporatePartner } from './components';

const SponsorPage = () => {
  return (
    <PageLayout>
      <Container>
        <Content>
          <CorporateJob />
          <CorporatePartner />
          <CorporateLinkedActivities />
        </Content>
      </Container>
    </PageLayout>
  );
};

export default SponsorPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 180px;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    padding-top: 150px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    padding-top: 87px;
  }
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1200px;
  gap: 190px;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    max-width: 766px;
    gap: 150px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    max-width: 360px;
    gap: 100px;
  }
`;
