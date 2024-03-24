import * as S from './style';

interface TabProps {
  tab?: string;
  title: string;
  description: string;
}

export default function Tab({ tab, title, description }: TabProps) {
  return (
    <S.Wrapper>
      {tab && <S.Tab>{tab}</S.Tab>}
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  );
}
