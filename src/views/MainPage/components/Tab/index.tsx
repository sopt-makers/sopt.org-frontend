import * as S from './style';

interface TabProps {
  title: string;
  description: string;
}

export default function Tab({ title, description }: TabProps) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      {description.split('\n').map((string) => {
        return <S.Description key={string}>{string}</S.Description>;
      })}
    </S.Wrapper>
  );
}
