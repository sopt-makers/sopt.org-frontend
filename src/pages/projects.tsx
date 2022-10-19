import styled from '@emotion/styled';
import Sopt404 from '@src/assets/images/sopt_404.png';
import Header from '@src/components/common/Header';
import RoundButton from '@src/components/common/RoundButton';
import ProjectDetail from '@src/components/Projects/ProjectDetail';
import theme from '@src/styles/theme';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

function Projects() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  return (
    <>
      <Header />
      <Styled.Root>
        <ProjectDetail />
        {/* <Image
          src={Sopt404.src}
          width={isDesktop ? 296 : 196}
          height={isDesktop ? 78 : 52}
          alt="솝트"
          blurDataURL={Sopt404.src}
          placeholder="blur"
        />
        <span>앗 아직 준비 중인 기능이에요!</span> */}
        {/* <RoundButton isReverse={true} onClick={handleClick}>
        홈으로 가기
      </RoundButton> */}
      </Styled.Root>
    </>
  );
}

export default Projects;

const Styled = {
  Root: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: calc(100vh - 100px);

    /* & span {
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
    } */
  `,
};
