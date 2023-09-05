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
    <div>
      <Wrapper>
        <SectionTitleWrapper>
          <SectionTitleTranslate>Inquiry</SectionTitleTranslate>
          <SectionTitle>문의하기</SectionTitle>
        </SectionTitleWrapper>
        <SectionSubTitle>SOPT 지원에 대해 궁금한 것이 더 있나요?</SectionSubTitle>
      </Wrapper>
      <GridWrapper>
        {contactInDisplayOrder.map((contact) => {
          const contactItem = contactMap[contact];
          return (
            <ItemWrapper key={contact}>
              <IconWrapper>
                {contactItem.thumbnail.type === 'image' ? (
                  <IconImage src={contactItem.thumbnail.src} alt={contactItem.thumbnail.alt} />
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
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    gap: 8px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    gap: 2px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  gap: 40px;

  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    gap: 24px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    gap: 36px;
  }
`;

const IconImage = styled(Image)`
  width: 98px;
  height: 98px;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    width: 60px;
    height: 60px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 50px;
    height: 50px;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  row-gap: 80px;
  margin-top: 80px;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    row-gap: 50px;
    margin-top: 40px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    grid-template-columns: 1fr;
    row-gap: 20px;
    margin-top: 20px;
  }
`;

const IconWrapper = styled.div`
  width: 100px;
  height: 100px;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    width: 60px;
    height: 60px;
    & svg {
      transform-origin: top left;
      transform: scale(0.6);
    }
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
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
  font-size: 30px;
  font-weight: 400;
  line-height: 30px; /* 100% */
  letter-spacing: -0.3px;
  margin-bottom: 18px;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    color: #787878;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */
    letter-spacing: -0.18px;
    margin-bottom: 4px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    color: #787878;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    letter-spacing: -0.14px;
    margin-bottom: 4px;
  }
`;

const Sub = styled.div`
  color: #fff;
  font-size: 40px;
  font-weight: 600;
  line-height: 50px; /* 125% */
  letter-spacing: -0.4px;
  text-decoration-line: underline;
  cursor: pointer;

  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    color: #fff;
    font-size: 24.534px;
    font-style: normal;
    font-weight: 600;
    line-height: 30.667px; /* 125% */
    letter-spacing: -0.245px;
    text-decoration-line: underline;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 155.556% */
    letter-spacing: -0.18px;
    text-decoration-line: underline;
  }
`;

export default Contact;
