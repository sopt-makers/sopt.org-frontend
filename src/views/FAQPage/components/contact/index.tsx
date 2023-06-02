import styled from '@emotion/styled';
import { contactInfo } from '../../lib/constants';
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
    margin: 180px 0 240px 0;
    /* 태블릿 뷰 */
    @media (max-width: 1919.9px) and (min-width: 766px) {
      align-items: center;
      margin-top: 170px;
      margin-bottom: 200px;
    }
    /* 모바일 뷰 */
    @media (max-width: 765.9px) {
      margin-top: 132px;
      margin-bottom: 100px;
    }
  `,
  Title: styled.h1`
    font-weight: 800;
    font-size: 45px;
    line-height: 60px;

    color: #ffffff;
    margin-bottom: 100px;
    /* 태블릿 뷰 */
    @media (max-width: 1919.9px) and (min-width: 766px) {
      font-size: 36px;
    }
    /* 모바일 뷰 */
    @media (max-width: 765.9px) {
      font-size: 20px;
      margin-bottom: 48px;
    }
  `,
  ContactInfo: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 80px;
    /* 모바일 뷰 */
    @media (max-width: 765.9px) {
      gap: 40px;
    }
  `,
};
