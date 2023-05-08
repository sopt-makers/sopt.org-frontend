import Image from 'next/image';
import NullImage from '@src/assets/images/null_image.png';
import * as St from './style';

type MeberCardProps = {
  imgSrc?: string;
  name: string;
  description?: string;
  part: string;
};

const MemberCard = ({ imgSrc, name, description, part }: MeberCardProps) => {
  return (
    <St.Card>
      <St.ImageWrapper>
        <Image src={imgSrc || NullImage.src} alt={name} fill />
      </St.ImageWrapper>
      <St.Name>{name}</St.Name>
      <St.Desc>{description || '-'}</St.Desc>
      <St.Part>{part}</St.Part>
    </St.Card>
  );
};

export default MemberCard;
