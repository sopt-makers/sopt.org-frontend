import styled from '@emotion/styled';
import { contactInfo } from '@src/lib/constants/faq';
import ContactInfo from './ContactInfo';

function Contact() {
  return (
    <Styled.Root>
      <Styled.Title>문의하기</Styled.Title>

      <Styled.ContactInfo>
        {contactInfo.map((info) => (
          <ContactInfo key={info.id} info={info} />
        ))}
      </Styled.ContactInfo>
    </Styled.Root>
  );
}

export default Contact;

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    margin: 180rem 0 240rem 0;
    /* 태블릿 뷰 */
    @media (max-width: 1919.9px) and (min-width: 766px) {
      align-items: center;
      margin-top: 170rem;
      margin-bottom: 200rem;
    }
    /* 모바일 뷰 */
    @media (max-width: 765.9px) {
      margin-top: 132rem;
      margin-bottom: 100rem;
    }
  `,
  Title: styled.h1`
    font-weight: 800;
    font-size: 45rem;
    line-height: 60rem;

    color: #ffffff;
    margin-bottom: 100rem;
    /* 태블릿 뷰 */
    @media (max-width: 1919.9px) and (min-width: 766px) {
      font-size: 36rem;
    }
    /* 모바일 뷰 */
    @media (max-width: 765.9px) {
      font-size: 20rem;
      margin-bottom: 48rem;
    }
  `,
  ContactInfo: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 80rem;
    /* 모바일 뷰 */
    @media (max-width: 765.9px) {
      gap: 40rem;
    }
  `,
};
