import * as S from './style';

interface BannerProps {
  imageSrc: string;
  title: string;
}

const Banner = (props: BannerProps) => {
  const { imageSrc } = props;

  return <S.Banner src={imageSrc}></S.Banner>;
};

export default Banner;
