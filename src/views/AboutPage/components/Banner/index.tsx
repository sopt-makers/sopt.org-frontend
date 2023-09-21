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
      <Image
        src={imageSrc}
        alt="솝트 공식홈페이지 어바웃페이지 배너 사진"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <St.HeadTitle>{title}</St.HeadTitle>
    </St.ImageWrapper>
  );
};

export default Banner;
