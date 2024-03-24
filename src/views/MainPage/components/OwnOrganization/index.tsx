import Image from 'next/image';
import { Ref, forwardRef } from 'react';
import IcArrowLeft from '@src/assets/icons/ic_arrow_left.svg';
import IcArrowRight from '@src/assets/icons/ic_arrow_right.svg';
import { useIsMobile } from '@src/hooks/useDevice';
import useInfiniteCarousel from '@src/hooks/useInfiniteCarousel';
import { OWN_ORGANIZATION_LIST } from '@src/lib/constants/main';
import { TextWeightType } from '@src/lib/types/universal';
import Tab from '../Tab';
import OwnOrganizationCard from './Card';
import * as S from './style';

type OwnOrganizationCardProps = {
  nameKor: string;
  nameEng: string;
  description: TextWeightType[];
  frontSideBg: { mo: string; pc: string; ta: string; bigPc: string };
  backSideBg: string;
};

function OwnOrganization(_props: unknown, ref: Ref<HTMLDivElement>) {
  const isMobile = useIsMobile('768px');
  const {
    carouselRef,
    infiniteCarouselList,
    handleCarouselSwipe,
    handleTouchStart,
    handleTouchEnd,
  } = useInfiniteCarousel<OwnOrganizationCardProps>(OWN_ORGANIZATION_LIST, '(-100% - 20px)');

  return (
    <S.Wrapper id="team" ref={ref}>
      <Tab
        title={'솝트가 운영하는 자체 기구'}
        description={
          '솝트에는 자체적으로 운영하는 네 가지의 팀이 있습니다.\n솝트의 보다 유연하고 열정적인 경험을 위해 노력하죠.'
        }
      />
      {!isMobile && (
        <S.ContentWrapper>
          {OWN_ORGANIZATION_LIST.map((organization) => (
            <OwnOrganizationCard key={organization.nameEng} {...organization} />
          ))}
        </S.ContentWrapper>
      )}
      {isMobile && (
        <>
          <S.CarouselWrapper>
            <S.LeftArrow>
              <Image
                src={IcArrowLeft}
                width="42"
                height="42"
                alt="왼쪽 화살표"
                onClick={() => handleCarouselSwipe(-1)}
              />
            </S.LeftArrow>
            <S.Carousel
              ref={carouselRef}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {infiniteCarouselList.map((organization, index) => {
                return (
                  <S.Slide key={index}>
                    <OwnOrganizationCard {...organization} />
                  </S.Slide>
                );
              })}
            </S.Carousel>
            <S.RightArrow>
              <Image
                src={IcArrowRight}
                width="42"
                height="42"
                alt="오른쪽 화살표"
                onClick={() => handleCarouselSwipe(1)}
              />
            </S.RightArrow>
          </S.CarouselWrapper>
        </>
      )}
    </S.Wrapper>
  );
}

export default forwardRef(OwnOrganization);
