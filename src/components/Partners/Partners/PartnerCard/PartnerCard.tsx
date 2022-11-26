import Image from 'next/image';

import * as S from './PartnerCard.style';

interface PartnerCardProps {
  posterImage: string;
  name: string;
}

function PartnerCard(props: PartnerCardProps) {
  const { posterImage, name } = props;

  return (
    <S.Root>
      <S.ImageWrap>
        <Image
          layout="fill"
          src={posterImage}
          alt="협업 프로젝트 사진"
          blurDataURL={posterImage}
          placeholder="blur"
        />
      </S.ImageWrap>
      <S.Name>{name}</S.Name>
    </S.Root>
  );
}

export default PartnerCard;
