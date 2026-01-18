import * as S from './style';

interface ProjectProps {
  thumbnail: string;
  title: string;
  category: string;
  description: string;
  status: string; 
  members: number;
}

export default function Project({ thumbnail, title, category, description, status, members }: ProjectProps) {
  return (
    <S.Wrapper>
      <S.Thumbnail src={thumbnail} alt={title} />
      <S.ContentWrapper>
        <S.TitleWrapper>
          <S.Title>{title}</S.Title>
          <S.Category>{category}</S.Category>
        </S.TitleWrapper>
        <S.Description>{description}</S.Description>
      </S.ContentWrapper>
      <S.FooterLayout> 
        {status !== '' ? <S.StatusLayout><S.StatusIcon /><S.Status>{status}</S.Status></S.StatusLayout> : <></>}
        <S.Members>{members}</S.Members>
      </S.FooterLayout>

    </S.Wrapper>
  )
}