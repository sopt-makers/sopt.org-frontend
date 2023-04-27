import Image from 'next/image';
import 이미지 from './image-76.png';
import * as St from './style';

const 기수 = 30;
const 솝트 = 'GO SOPT';

const Banner = () => {
  return (
    <St.ImageWrapper>
      <Image src={이미지} alt="" fill style={{ objectFit: 'cover' }} />
      <St.HeadTitle>
        {기수}기 {솝트} 소개
      </St.HeadTitle>
    </St.ImageWrapper>
  );
};

export default Banner;
