import { ReactComponent as IcArrowLeft } from '@src/assets/icons/ic_arrow_left.svg';
import { ReactComponent as IcArrowRight } from '@src/assets/icons/ic_arrow_right.svg';
import { useIsMobile } from '@src/hooks/useDevice';
import { keywordList, partList } from '@src/lib/constants/main';
import { Part } from '@src/lib/types/universal';
import * as S from './style';

interface PartSlideProps {
  part: Part;
  handleCarouselSwipe: (direction: number) => void;
}

export default function PartSlide({ part, handleCarouselSwipe }: PartSlideProps) {
  const { value, label, description } = partList[part];
  const isMobile = useIsMobile('768px');
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
        <IcArrowLeft onClick={() => handleCarouselSwipe(-1)} />
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
        {keywordList[part].map(({ content, desktop, mobile, ...style }, index) => {
          const responsiveStyle = isMobile ? mobile : desktop;
          return (
            <S.Keyword
              key={index}
              custom={index}
              initial="initial"
              whileInView="visible"
              variants={contentDraw}
              style={{ position: 'absolute', ...style, ...responsiveStyle }}
            >
              {content}
            </S.Keyword>
          );
        })}
      </S.Wrapper>
      <S.RightArrow>
        <IcArrowRight onClick={() => handleCarouselSwipe(1)} />
      </S.RightArrow>
    </S.PartSlide>
  );
}
