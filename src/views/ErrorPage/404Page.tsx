import { useRouter } from 'next/router';
import { Header } from '@src/components';
import RoundButton from '@src/components/common/RoundButton';
import * as S from './styles';
import ERROR_MESSAGE from './constants/errorMessage';
import ERROR_BUTTON from './constants/errorButton';
import CODE_IMG from './constants/errorCode';

function Wrong404() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/');
    router.back();
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
