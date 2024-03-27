import styled from '@emotion/styled';
import { ContactInfoType } from '@src/lib/types/faq';

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
    font-size: 30rem;
    line-height: 30rem;
    color: #787878;
    margin-bottom: 32rem;
    /* 태블릿 뷰 */
    @media (max-width: 1919px) {
      font-size: 25rem;
    }
    /* 모바일 뷰 */
    @media (max-width: 765px) {
      font-size: 14rem;
      line-height: 16rem;
      margin-bottom: 8rem;
    }
  `,
  Content: styled.p`
    width: fit-content;
    font-weight: 600;
    font-size: 40rem;
    line-height: 50rem;

    text-decoration-line: underline;
    text-underline-position: under;
    color: #ffffff;
    cursor: pointer;
    /* 태블릿 뷰 */
    @media (max-width: 1919px) {
      font-size: 35rem;
    }
    /* 모바일 뷰 */
    @media (max-width: 765px) {
      font-size: 18rem;
      line-height: 27rem;
    }
  `,
};
