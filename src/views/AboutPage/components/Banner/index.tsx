import Image from 'next/image';
import * as St from './style';

interface BannerProps {
  imageSrc: string;
  generation: number;
  title: string;
}

const Banner = (props: BannerProps) => {
  const { imageSrc, generation, title } = props;

  return (
    <St.ImageWrapper>
      <Image src={imageSrc} alt="" fill style={{ objectFit: 'cover' }} />
      <St.HeadTitle>
        {generation}기 {title} 소개
      </St.HeadTitle>
    </St.ImageWrapper>
  );
};

export default Banner;
