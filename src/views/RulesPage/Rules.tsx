import styled from '@emotion/styled';
import { Footer, Header } from '@src/components';
import { useIsDesktop } from '@src/hooks/useDevice';
import { RulesHead, RulesList, UnderlinedText } from './components';

const SOPT_RULES = 'SOPT 회칙';

function Rules() {
  const isDesktopOrTablet = useIsDesktop('769px');

  return (
    <Root>
      <RulesHead />
      <Header />
      <Content>
        <UnderlinedText fontSize={isDesktopOrTablet ? '25px' : '35px'}>{SOPT_RULES}</UnderlinedText>
        <RulesList />
      </Content>
      <Footer />
    </Root>
  );
}

const Content = styled.div`
  margin-top: 250px;
  margin-bottom: 130px;
  width: 100%;
  max-width: 1192px;
  @media screen and (max-width: 1280px) {
    width: 92%;
  }
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

export default Rules;
