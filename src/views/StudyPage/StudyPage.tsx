import styled from '@emotion/styled';
import PageLayout from '@src/components/common/PageLayout';
import StudySection from './components/Section';
import useFetch from './hooks/useFetch';

const StudyPage = () => {
  const state = useFetch();

  return (
    <PageLayout>
      {state._TAG === 'OK' && (
        <Root>
          <Title>스터디</Title>
          <StudySection studies={state.data.studies} />
        </Root>
      )}
    </PageLayout>
  );
};

export default StudyPage;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200rem;
  min-height: 100vh;
  margin: 0 auto;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    width: 700rem;
    margin-top: 90rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 360rem;
    margin-top: 90rem;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 45rem;
  line-height: 60rem;
  letter-spacing: -1%;
  margin-top: 190rem;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    font-size: 36rem;
    line-height: 56rem;
    margin-top: 70rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 24rem;
    line-height: 28rem;
    margin-top: 30rem;
  }
`;
