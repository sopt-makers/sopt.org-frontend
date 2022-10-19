import Sopt404 from '@src/assets/images/sopt_404.png';
import Header from '@src/components/common/Header';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

import { Styled } from './styles';

function Projects() {
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
        <span>앗 아직 준비 중인 기능이에요!</span>
      </Styled.Root>
    </>
  );
}

export default Projects;
