import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { useRouter } from 'next/router';
import { Header } from '@src/components';
import RoundButton from '@src/components/common/RoundButton';

function Wrong() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/');
  };

  return (
    <>
      <Header />
      <Styled.Root>
        <span>잘못된 경로예요</span>
        <RoundButton onClick={handleButtonClick} isReverse={true}>
          홈으로 가기
        </RoundButton>
      </Styled.Root>
    </>
  );
}

export default Wrong;

const Styled = {
  Root: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 48px;

    width: 100%;
    height: 100vh;

    & span {
      color: ${colors.gray10};

      font-size: 48px;
      font-weight: 600;
      line-height: 150%; /* 72px */
      letter-spacing: -0.96px;
    }
  `,
};
