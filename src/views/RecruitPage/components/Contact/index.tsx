import styled from '@emotion/styled';
import Image from 'next/image';
import {
  SectionSubTitle,
  SectionTitle,
  SectionTitleTranslate,
  SectionTitleWrapper,
} from '../common/styles';
import { contactInDisplayOrder, contactMap } from './constant';

const Contact = () => {
  return (
    <Wrapper>
      <SectionWrapper>
        <SectionTitleWrapper>
          <SectionTitleTranslate>Inquiry</SectionTitleTranslate>
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
  gap: 8rem;
  /* 태블릿 뷰 */
  @media (max-width: 1299rem) and (min-width: 766rem) {
    gap: 8rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    gap: 2rem;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  gap: 40rem;

  /* 태블릿 뷰 */
  @media (max-width: 1299rem) and (min-width: 766rem) {
    gap: 24rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    gap: 16rem;
  }
`;

const IconImage = styled(Image)`
  width: 98rem;
  height: 98rem;
  /* 태블릿 뷰 */
  @media (max-width: 1299rem) and (min-width: 766rem) {
    width: 60rem;
    height: 60rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    width: 50rem;
    height: 50rem;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  row-gap: 80rem;
  column-gap: 160rem;
  margin-top: 80rem;
  /* 태블릿 뷰 */
  @media (max-width: 1299rem) and (min-width: 766rem) {
    grid-template-columns: 1fr;
    row-gap: 60rem;
    margin-top: 48rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    grid-template-columns: 1fr;
    row-gap: 40rem;
    margin-top: 30rem;
  }
`;

const IconWrapper = styled.div`
  width: 100rem;
  height: 100rem;
  /* 태블릿 뷰 */
  @media (max-width: 1299rem) and (min-width: 766rem) {
    width: 60rem;
    height: 60rem;
    & svg {
      transform-origin: top left;
      transform: scale(0.6);
    }
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    width: 50rem;
    height: 50rem;
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
  line-height: 30rem; /* 100% */
  letter-spacing: -0.3rem;
  margin-bottom: 18rem;
  /* 태블릿 뷰 */
  @media (max-width: 1299rem) and (min-width: 766rem) {
    color: #787878;
    font-size: 18rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27rem */
    letter-spacing: -0.18rem;
    margin-bottom: 4rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    color: #787878;
    font-size: 14rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21rem */
    letter-spacing: -0.14rem;
    margin-bottom: 4rem;
  }
`;

const Sub = styled.div`
  color: #fff;
  font-size: 40rem;
  font-weight: 600;
  line-height: 50rem; /* 125% */
  letter-spacing: -0.4rem;
  text-decoration-line: underline;
  cursor: pointer;

  /* 태블릿 뷰 */
  @media (max-width: 1299rem) and (min-width: 766rem) {
    color: #fff;
    font-size: 24.534rem;
    font-style: normal;
    font-weight: 600;
    line-height: 30.667rem; /* 125% */
    letter-spacing: -0.245rem;
    text-decoration-line: underline;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    color: #fff;
    font-size: 18rem;
    font-style: normal;
    font-weight: 600;
    line-height: 28rem; /* 155.556% */
    letter-spacing: -0.18rem;
    text-decoration-line: underline;
  }
`;

export default Contact;
