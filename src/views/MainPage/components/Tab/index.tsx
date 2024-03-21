import * as S from './style';

interface TabProps {
  title: string;
  description: string;
}

export default function Tab({ title, description }: TabProps) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  );
}
