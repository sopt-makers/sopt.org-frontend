import { track } from '@amplitude/analytics-browser';
import Image from 'next/image';
import { ReactComponent as ArrowLeft } from '@src/assets/icons/arrow_left_28x28.svg';
import { ReactComponent as ArrowRight } from '@src/assets/icons/arrow_right_28x28.svg';
import { useHorizontalScroll } from '@src/hooks/useHorizontalScroll';
import { corporatePartnerList } from './constants';
import * as S from './style';

function CoporatePartner() {
  const {
    scrollableRef,
    onClickLeftButton,
    onClickRightButton,
    isLeftScrollable,
    isRightScrollable,
  } = useHorizontalScroll(900, 2);

  return (
    <S.ContainerLayout>
      <S.Container>
        <S.Title>SOPT의 파트너</S.Title>
        <S.ContentWrapper>
          <S.ArrowWrapper
            onClick={() => {
              onClickLeftButton(scrollableRef.current);
              track('click_sponsor_logo_next');
            }}
          >
            <ArrowLeft stroke={isLeftScrollable ? 'white' : 'grey'} />
          </S.ArrowWrapper>
          <S.Content ref={scrollableRef}>
            {corporatePartnerList.map(({ name, imgSrc }) => {
              return (
                <S.Item key={name}>
                  <S.CorporateLogoImageWrapper>
                    <Image
                      src={imgSrc}
                      alt="corporate logo"
                      fill
                      sizes="(max-width: 766px) 138px 278px"
                    />
                  </S.CorporateLogoImageWrapper>
                  <S.Name>{name}</S.Name>
                </S.Item>
              );
            })}
          </S.Content>
          <S.ArrowWrapper
            onClick={() => {
              onClickRightButton(scrollableRef.current);
              track('click_sponsor_logo_next');
            }}
          >
            <ArrowRight stroke={isRightScrollable ? 'white' : 'grey'} />
          </S.ArrowWrapper>
        </S.ContentWrapper>
        <S.RequestSponsorButton href="mailto:president@sopt.org?cc=v_president@sopt.org&subject=[후원/협력] {기관 명}의 SOPT 후원/협력 제안에 관한 건">
          후원 문의하기
        </S.RequestSponsorButton>
      </S.Container>
    </S.ContainerLayout>
  );
}

export default CoporatePartner;
