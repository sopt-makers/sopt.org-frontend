import styled from '@emotion/styled';
import { ContactInfoType } from '../../types';

interface ContactInfoProps {
  info: ContactInfoType;
}

function ContactInfo(props: ContactInfoProps) {
  const { info } = props;

  const onClickLink = (id: string) => {
    switch (id) {
      case 'mail':
        window.location.href = 'mailto:president@sopt.org';
        break;
      case 'facebook':
        window.open('https://www.facebook.com/clubsopt/');
        break;
      case 'instagram':
        window.open('https://www.instagram.com/sopt_official/');
        break;
      default:
        window.open('http://pf.kakao.com/_JdTKd');
        break;
    }
  };

  return (
    <Styled.Root>
      <Styled.Text>{info.text}</Styled.Text>
      <Styled.Content onClick={() => onClickLink(info.id)}>{info.content}</Styled.Content>
    </Styled.Root>
  );
}

export default ContactInfo;

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    /* 태블릿 뷰 */
    @media (max-width: 1919px) {
      align-items: center;
    }
  `,
  Text: styled.h1`
    font-weight: 400;
    font-size: 30px;
    line-height: 30px;
    color: #787878;
    margin-bottom: 32px;
    /* 태블릿 뷰 */
    @media (max-width: 1919px) {
      font-size: 25px;
    }
    /* 모바일 뷰 */
    @media (max-width: 765px) {
      font-size: 14px;
      line-height: 16px;
      margin-bottom: 8px;
    }
  `,
  Content: styled.p`
    width: fit-content;
    font-weight: 600;
    font-size: 40px;
    line-height: 50px;

    text-decoration-line: underline;
    text-underline-position: under;
    color: #ffffff;
    cursor: pointer;
    /* 태블릿 뷰 */
    @media (max-width: 1919px) {
      font-size: 35px;
    }
    /* 모바일 뷰 */
    @media (max-width: 765px) {
      font-size: 18px;
      line-height: 27px;
    }
  `,
};
