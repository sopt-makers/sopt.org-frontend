import * as S from './style';
import icMembers from '@src/assets/icons/ic_members.svg';

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
        {status !== '' && (
        <S.StatusLayout>
          <S.StatusCircle />
          <S.Status>{status}</S.Status>
        </S.StatusLayout> 
        )}
        <S.Members>
          <S.MembersIcon src={icMembers} alt="members" aria-hidden="true" />
          {members} members
        </S.Members>
      </S.FooterLayout>
    </S.Wrapper>
  );
}
