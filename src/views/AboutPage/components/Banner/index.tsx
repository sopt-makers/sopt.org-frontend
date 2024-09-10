import Image from 'next/image';
import * as S from './style';

interface BannerProps {
  imageSrc: string;
  title: string;
}

const Banner = (props: BannerProps) => {
  const { imageSrc } = props;

  return (
    <S.Banner>
      <Image
        src={imageSrc}
        alt="SOPT banner"
        fill
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </S.Banner>
  );
};

export default Banner;
