import * as S from './style';

interface TabProps {
  tab: string;
  title: string;
  description: string;
}
export default function Tab({ tab, title, description }: TabProps) {
  return (
    <S.Wrapper>
      <S.Tab>{tab}</S.Tab>
      <S.Title>{title}</S.Title>
      {description.split('\n').map((string) => {
        return <S.Description key={string}>{string}</S.Description>;
      })}
    </S.Wrapper>
  );
}
