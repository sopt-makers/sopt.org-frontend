import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Sopt404 from '@src/assets/images/sopt_404.png';
import { Header } from '@src/components';
import RoundButton from '@src/components/common/RoundButton';
import { useIsDesktop } from '@src/hooks/useDevice';
import theme from '@src/styles/theme';

function Wrong() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/');
  };
  const isDesktop = useIsDesktop();

  return (
    <>
      <Header />
      <Styled.Root>
        <Image
          src={Sopt404.src}
          width={isDesktop ? 296 : 196}
          height={isDesktop ? 78 : 52}
          alt="솝트"
          blurDataURL={Sopt404.src}
          placeholder="blur"
        />
        <span>잘못된 경로예요!</span>
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
    width: 100%;
    height: 100vh;

    & span {
      margin-top: 99px;
      margin-bottom: 99px;
      line-height: 56px;
      color: ${theme.colors.soptWhite};
      font-size: 45px;
      font-weight: 400;
      font-style: normal;
      @media (max-width: 769px) {
        font-size: 24px;
      }
    }
  `,
};
