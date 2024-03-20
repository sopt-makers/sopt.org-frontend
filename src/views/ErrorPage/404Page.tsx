import { useRouter } from 'next/router';
import { Header } from '@src/components';
import RoundButton from '@src/components/common/RoundButton';
import * as S from './styles';
import { ReactComponent as Ic404Front } from './assets/ic_404_front.svg';
import { ReactComponent as Ic404Back } from './assets/ic_404_back.svg';
import { ReactComponent as Ic404Ghost } from './assets/ic_404_ghost.svg';

function Wrong404() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/');
  };

  return (
    <>
      <Header />
      <S.Root>
        <S.CodeText>
          <Ic404Front/>
          <Ic404Ghost/>
          <Ic404Back/>
        </S.CodeText>
        <S.ErrorText>존재하지 않는 페이지예요</S.ErrorText>
        <RoundButton onClick={handleButtonClick}>
          홈으로 가기
        </RoundButton>
      </S.Root>
    </>
  );
}

export default Wrong404;
