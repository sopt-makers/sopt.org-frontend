import styled from '@emotion/styled';
import Sopt404 from '@src/assets/images/sopt_404.png';
import { Header } from '@src/components';
import RoundButton from '@src/components/common/RoundButton';
import theme from '@src/styles/theme';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

function Wrong() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/');
  };
  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });

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
      font-family: 'SUIT', arial, sans-serif;
      font-size: 45px;
      font-weight: 400;
      font-style: normal;
      @media (max-width: 769px) {
        font-size: 24px;
      }
    }
  `,
};
