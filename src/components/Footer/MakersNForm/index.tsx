import { FC } from 'react';
import useScrollPosition from '@src/hooks/useScrollPosition';
import { PRIVACY_POLICY_URL } from '@src/lib/constants/routes';
import St from './style';

const MakersNForm: FC = () => {
  const { isScrollingDown, isScrollTop } = useScrollPosition();

  const handleClickKakao = () => {
    window.Kakao.Channel.chat({
      channelPublicId: '_sxaIWG',
    });
  };

  return (
    <St.FooterForm hide={isScrollingDown && !isScrollTop}>
      <St.FooterLink
        href="https://playground.sopt.org/makers"
        target="_blank"
        rel="noopener noreferrer"
      >
        만든 사람들
      </St.FooterLink>
      <St.FooterButton type="button" onClick={handleClickKakao}>
        의견 제안하기
      </St.FooterButton>
      <St.FooterLink href={PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer">
        개인정보처리방침
      </St.FooterLink>
    </St.FooterForm>
  );
};

export default MakersNForm;
