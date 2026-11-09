import { useRouter } from 'next/router';
import * as S from './style';

interface ProjectProps {
  thumbnail: string;
  title: string;
  category: string;
  description: string;
  isActive: boolean;
  href: string;
}

export default function Project({
  thumbnail,
  title,
  category,
  description,
  isActive,
  href,
}: ProjectProps) {
  const router = useRouter();

  return (
    <S.Wrapper $isActive={isActive} onClick={() => router.push(href)}>
      <S.Thumbnail src={thumbnail} alt={title} $isActive={isActive} />
      <S.ContentWrapper>
        <S.TitleWrapper>
          <S.Title $isActive={isActive}>{title}</S.Title>
          <S.Category $isActive={isActive}>{category}</S.Category>
        </S.TitleWrapper>
        <S.Description $isActive={isActive}>{description}</S.Description>
      </S.ContentWrapper>
    </S.Wrapper>
  );
}
