import { useIsMobile, useIsTablet } from '@src/hooks/useDevice';
import { keywordList, partList } from '@src/lib/constants/main';
import { Part } from '@src/lib/types/universal';
import * as S from './style';

interface PartSlideProps {
  part: Part;
  description: string;
}

export default function PartSlide({ part, description }: PartSlideProps) {
  const { value, label } = partList[part];
  const isTablet = useIsTablet('429px', '75rem');
  const isMobile = useIsMobile('26.75rem');
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
      <S.Wrapper>
        <S.PartDetail>
          <S.PartTop>
            <S.PartBadge>{value}</S.PartBadge>
            <S.PartTitle>{label}</S.PartTitle>
          </S.PartTop>
          <S.PartDescription>{description}</S.PartDescription>
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
    </S.PartSlide>
  );
}
