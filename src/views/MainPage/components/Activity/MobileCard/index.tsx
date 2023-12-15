import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { ReactComponent as IcArrowLeft } from '@src/assets/icons/ic_arrow_left.svg';
import { ReactComponent as IcArrowRight } from '@src/assets/icons/ic_arrow_right.svg';
import { Activity } from '@src/lib/constants/main';
import Card from '../Card';
import * as S from './style';

export default function MobileCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <IcArrowRight />,
    prevArrow: <IcArrowLeft />,
  };

  return (
    <S.StyledSlider {...settings}>
      {Activity.map(({ img, navKor, navEng, description }) => {
        return (
          <Card key={navKor} img={img} navKor={navKor} navEng={navEng} description={description} />
        );
      })}
    </S.StyledSlider>
  );
}
