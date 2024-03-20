import { useRouter } from 'next/router';
import { Header } from '@src/components';
import RoundButton from '@src/components/common/RoundButton';
import * as S from './styles';
import ERROR_MESSAGE from './constants/errorMessage';
import { Ic404Back, Ic404Front, Ic404Ghost, Ic500Back, Ic500Cone, Ic500Front } from './assets';
import ERROR_BUTTON from './constants/errorButton';

function Wrong404() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/');
  };

  const CODE_IMG = {
    CODE404:
      <>
        <Ic404Front/>
        <Ic404Ghost/>
        <Ic404Back/>
      </>,
    CODE500: 
      <>
        <Ic500Front />
        <Ic500Cone />
        <Ic500Back />
      </>,
  };

  return (
    <>
      <Header />
      <S.Root>
        <S.CodeText>
          {CODE_IMG.CODE500}
        </S.CodeText>
        <S.ErrorText>{ERROR_MESSAGE.CODE500}</S.ErrorText>
        <RoundButton onClick={handleButtonClick}>
          {ERROR_BUTTON.CODE500}
        </RoundButton>
      </S.Root>
    </>
  );
}

export default Wrong404;
