import { useRouter } from 'next/router';
import { Header } from '@src/components';
import RoundButton from '@src/components/common/RoundButton';
import * as S from './styles';
import ERROR_MESSAGE from './constants/errorMessage';
import ERROR_BUTTON from './constants/errorButton';
import ErrorCode from './components/ErrorCode';

interface ErrorPageProps {
  code: 404 | 500;
}

function ErrorPage({ code }: ErrorPageProps) {
  const router = useRouter();
  const CODE_KEY : 'CODE404' | 'CODE500' = `CODE${code}`;

  const handleButtonClick = () => {
    code===404? router.push('/') : router.back();
  };

  return (
    <>
      <Header />
      <S.Root>
        <S.TopSection>
          <S.CodeText>
            <ErrorCode code={code}/>
          </S.CodeText>
          <S.ErrorText>{ERROR_MESSAGE[CODE_KEY]}</S.ErrorText>
          <RoundButton onClick={handleButtonClick}>
            {ERROR_BUTTON[CODE_KEY]}
          </RoundButton>
        </S.TopSection>
        {code === 500 && (
          <S.ContactLink
            href="https://walla.my/sopt_official"
            target="_blank"
            rel="noopener noreferrer"
          >
            문의하기
          </S.ContactLink>
        )}
      </S.Root>
    </>
  );
}

export const Page404 = () => <ErrorPage code={404} />;
export const Page500 = () => <ErrorPage code={500} />;
