import styled from '@emotion/styled';
import { ContactInfoType } from '../../types';
import ContactInfo from './ContactInfo';

function Contact() {
  const contactInfo: ContactInfoType[] = [
    { id: 'mail', text: '이메일', content: 'president@sopt.org' },
    { id: 'instagram', text: '인스타그램', content: '@sopt_official' },
    { id: 'kakao', text: '카카오플러스친구', content: 'SOPT' },
    { id: 'facebook', text: '페이스북', content: 'clubsopt' },
  ];
  return (
    <Styled.Root>
      <Styled.Title>문의하기</Styled.Title>

      <Styled.ContactInfo>
        {contactInfo.map(info => <ContactInfo key={info.id} info={info} />)}
      </Styled.ContactInfo>
    </Styled.Root>
  );
}

export default Contact;

const Styled = {
  Root: styled.div`
    display:flex;
    flex-direction: column;
    margin:8rem 36rem 0 36rem;
  `,
  Title: styled.h1`
    font-weight: 800;
    font-size: 45px;
    line-height: 60px;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    margin-bottom:10rem;

  `,
  ContactInfo: styled.ul`
    display:flex;
    flex-direction: column;
    gap:8rem;
  `,
};
