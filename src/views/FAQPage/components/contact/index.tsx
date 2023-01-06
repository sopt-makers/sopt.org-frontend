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
  `,
  Title: styled.h1`
    font-weight: 800;
    font-size: 45px;
    line-height: 60px;
    letter-spacing: -0.01em;
    color: #ffffff;
    margin-bottom: 100px;
  `,
  ContactInfo: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 80px;
  `,
};
