import SectionLabel from '@src/components/common/SectionLabel';
import { corporatePartnerList } from '@src/views/SponsorPage/components/CorporatePartner/constants';
import arrow from '@src/assets/icons/ic_arrow_up_right.svg';
import * as S from './style';

export default function PartnersSection({ mainColor }: { mainColor: string }) {
  return (
    <S.Section>
      <S.Heading>
        <SectionLabel label="Partners" color={mainColor} />
        <S.Title>SOPT와 함께하는 파트너</S.Title>
      </S.Heading>

      <S.Marquee tabIndex={0} aria-label="SOPT 파트너 목록">
        <S.Track>
          {['original', 'duplicate'].map((copy) => (
            <S.LogoList key={copy} aria-hidden={copy === 'duplicate'}>
              {corporatePartnerList.map(({ name, imgSrc }) => (
                <S.Logo key={name}>
                  <S.LogoImage src={imgSrc} alt={name} fill sizes={S.logoImageSizes} />
                </S.Logo>
              ))}
            </S.LogoList>
          ))}
        </S.Track>
      </S.Marquee>

      <S.Link
        href="https://forms.gle/9oMWsibpouzo1oAk9"
        target="_blank"
        rel="noopener noreferrer"
        mainColor={mainColor}
      >
        <S.LinkText>후원 문의<S.DesktopSpace> </S.DesktopSpace>하러 가기</S.LinkText>
        <S.LinkIcon>
          <S.Arrow src={arrow} alt="" width={14} height={14} />
        </S.LinkIcon>
      </S.Link>
    </S.Section>
  );
}
