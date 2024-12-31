import styled from '@emotion/styled';
import Image from 'next/image';
import { useContext } from 'react';
import { BrandingColorContext } from '../..';
import {
  SectionSubTitle,
  SectionTitle,
  SectionTitleTranslate,
  SectionTitleWrapper,
} from '../common/style';
import { contactInDisplayOrder, contactMap } from './constant';

const Contact = () => {
  const { main } = useContext(BrandingColorContext);
  return (
    <Wrapper>
      <SectionWrapper>
        <SectionTitleWrapper>
          <SectionTitleTranslate mainColor={'#' + main}>Inquiry</SectionTitleTranslate>
          <SectionTitle>문의하기</SectionTitle>
        </SectionTitleWrapper>
        <SectionSubTitle>SOPT 지원에 대해 궁금한 것이 더 있나요?</SectionSubTitle>
      </SectionWrapper>
      <GridWrapper>
        {contactInDisplayOrder.map((contact) => {
          const contactItem = contactMap[contact];
          return (
            <ItemWrapper key={contact}>
              <IconWrapper>
                {contactItem.thumbnail.type === 'image' ? (
                  <IconImage src={contactItem.thumbnail.src} alt={contactItem.label} />
                ) : (
                  <contactItem.thumbnail.src />
                )}
              </IconWrapper>
              <div>
                <Title>{contactItem.label}</Title>
                <Sub
                  onClick={() => {
                    if (contactItem.link.type === 'open') {
                      window.open(contactItem.link.href);
                    } else {
                      window.location.href = contactItem.link.href;
                    }
                  }}
                >
                  {contactItem.desc}
                </Sub>
              </div>
            </ItemWrapper>
          );
        })}
      </GridWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* 태블릿 뷰 */
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    gap: 8px;
  }
  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    gap: 2px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  gap: 40px;

  /* 태블릿 뷰 */
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    gap: 24px;
  }
  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    gap: 16px;
  }
`;

const IconImage = styled(Image)`
  width: 98px;
  height: 98px;
  /* 태블릿 뷰 */
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    width: 60px;
    height: 60px;
  }
  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    width: 50px;
    height: 50px;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  row-gap: 80px;
  column-gap: 160px;
  margin-top: 80px;
  /* 태블릿 뷰 */
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    grid-template-columns: 1fr;
    row-gap: 60px;
    margin-top: 48px;
  }
  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    grid-template-columns: 1fr;
    row-gap: 40px;
    margin-top: 30px;
  }
`;

const IconWrapper = styled.div`
  width: 100px;
  height: 100px;
  /* 태블릿 뷰 */
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    width: 60px;
    height: 60px;
    & svg {
      transform-origin: top left;
      transform: scale(0.6);
    }
  }
  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    width: 50px;
    height: 50px;
    & svg {
      transform-origin: top left;
      transform: scale(0.5);
    }
  }
`;

const Title = styled.div`
  color: #787878;
  font-size: 30rem;
  font-weight: 400;
  line-height: 30px; /* 100% */
  letter-spacing: -0.3px;
  margin-bottom: 18px;
  /* 태블릿 뷰 */
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    color: #787878;
    font-size: 18rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */
    letter-spacing: -0.18px;
    margin-bottom: 4px;
  }
  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    color: #787878;
    font-size: 14rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    letter-spacing: -0.14px;
    margin-bottom: 4px;
  }
`;

const Sub = styled.div`
  color: #fff;
  font-size: 40rem;
  font-weight: 600;
  line-height: 50px; /* 125% */
  letter-spacing: -0.4px;
  text-decoration-line: underline;
  cursor: pointer;

  /* 태블릿 뷰 */
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    color: #fff;
    font-size: 24.534rem;
    font-style: normal;
    font-weight: 600;
    line-height: 30.667px; /* 125% */
    letter-spacing: -0.245px;
    text-decoration-line: underline;
  }
  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    color: #fff;
    font-size: 18rem;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 155.556% */
    letter-spacing: -0.18px;
    text-decoration-line: underline;
  }
`;

export default Contact;
