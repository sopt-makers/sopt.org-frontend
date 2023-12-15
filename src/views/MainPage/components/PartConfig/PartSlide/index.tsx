import Image from 'next/image';
import IcArrowLeft from '@src/assets/icons/ic_arrow_left.svg';
import IcArrowRight from '@src/assets/icons/ic_arrow_right.svg';
import { useIsMobile, useIsTablet } from '@src/hooks/useDevice';
import { DirectionType } from '@src/hooks/useInfiniteCarousel';
import { keywordList, partList } from '@src/lib/constants/main';
import { Part } from '@src/lib/types/universal';
import * as S from './style';

interface PartSlideProps {
  part: Part;
  handleCarouselSwipe: (direction: DirectionType) => void;
}

export default function PartSlide({ part, handleCarouselSwipe }: PartSlideProps) {
  const { value, label, description } = partList[part];
  const isTablet = useIsTablet('429px', '768px');
  const isMobile = useIsMobile('428px');
  const contentDraw = {
    initial: (custom: number) => ({ opacity: 0, y: 10 * (custom % 2) + 10 }),
    visible: {
      opacity: 1,
      y: 0,
      transition: { opacity: { delay: 0.4, duration: 0.6 }, y: { delay: 0.4, duration: 1 } },
    },
  };

  return (
    <S.PartSlide>
      <S.LeftArrow>
        <Image
          src={IcArrowLeft}
          width="42"
          height="42"
          alt="왼쪽 화살표"
          onClick={() => handleCarouselSwipe(-1)}
        />
      </S.LeftArrow>
      <S.Wrapper>
        <S.PartDetail>
          <S.PartTop>
            <S.PartBadge>{value}</S.PartBadge>
            <S.PartTitle>{label}</S.PartTitle>
          </S.PartTop>
          <S.PartDescription>
            {description.map(({ content, weight }, index) => (
              <S.Content key={index} weight={weight}>
                {content}
              </S.Content>
            ))}
          </S.PartDescription>
        </S.PartDetail>
        {keywordList[part].map(({ content, desktop, tablet, mobile, ...style }, index) => {
          const responsiveStyle = isMobile ? mobile : isTablet ? tablet : desktop;
          return (
            <S.Keyword
              key={index}
              custom={index}
              initial="initial"
              whileInView="visible"
              variants={contentDraw}
              style={{ ...style, ...responsiveStyle }}
            >
              {content}
            </S.Keyword>
          );
        })}
      </S.Wrapper>
      <S.RightArrow>
        <Image
          src={IcArrowRight}
          width="42"
          height="42"
          alt="오른쪽 화살표"
          onClick={() => handleCarouselSwipe(1)}
        />
      </S.RightArrow>
    </S.PartSlide>
  );
}
