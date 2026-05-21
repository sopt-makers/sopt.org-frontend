import { IconChevronRight } from '@sopt-makers/icons';
import { Button } from '@sopt-makers/ui';
import { ActivityContentType } from '@src/lib/types/main';
import * as S from './style';

type ActivityCardProps = Pick<
  ActivityContentType,
  'img' | 'navKor' | 'navEng' | 'description' | 'link'
>;

export default function ActivityCard({
  img,
  navKor,
  navEng,
  description,
  link,
}: ActivityCardProps) {
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <S.CardImage src={img} alt={navKor} width={996} height={540} loading="lazy" />
      </S.ImageWrapper>
      <S.Content>
        <S.TitleRow>
          <S.TitleKor>{navKor}</S.TitleKor>
          <S.TitleEng>{navEng}</S.TitleEng>
        </S.TitleRow>

        {description.map((textNode, index) => (
          <S.Description key={index}>{textNode.content}</S.Description>
        ))}

        {link && (
          <Button
            size="md"
            theme="black"
            rounded="lg"
            RightIcon={IconChevronRight}
            onClick={() => window.open(link.href, '_blank')}
          >
            {link.label}
          </Button>
        )}
      </S.Content>
    </S.Wrapper>
  );
}
