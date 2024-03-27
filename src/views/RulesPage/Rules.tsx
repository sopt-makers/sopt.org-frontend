import styled from '@emotion/styled';
import PageLayout from '@src/components/common/PageLayout';
import { useIsDesktop } from '@src/hooks/useDevice';
import { RulesHead, RulesList, UnderlinedText } from './components';

const SOPT_RULES = 'SOPT 회칙';

function Rules() {
  const isDesktopOrTablet = useIsDesktop('769px');

  return (
    <PageLayout>
      <Root>
        <RulesHead />
        <Content>
          <UnderlinedText fontSize={isDesktopOrTablet ? '25rem' : '35rem'}>
            {SOPT_RULES}
          </UnderlinedText>
          <RulesList />
        </Content>
      </Root>
    </PageLayout>
  );
}

const Content = styled.div`
  margin-top: 250rem;
  margin-bottom: 130rem;
  width: 100%;
  max-width: 1192rem;
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
