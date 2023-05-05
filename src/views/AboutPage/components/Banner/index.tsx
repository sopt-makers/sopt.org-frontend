import Image from 'next/image';
import * as St from './style';

interface BannerProps {
  imageSrc: string;
  title: string;
}

const Banner = (props: BannerProps) => {
  const { imageSrc, title } = props;

  return (
    <St.ImageWrapper>
      <Image src={imageSrc} alt="" fill style={{ objectFit: 'cover' }} priority />
      <St.HeadTitle>{title}</St.HeadTitle>
    </St.ImageWrapper>
  );
};

export default Banner;
