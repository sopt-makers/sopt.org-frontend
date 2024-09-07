import { ReactComponent as IcGithub } from '@src/assets/icons/ic_github.svg';
import { ReactComponent as IcLinkedin } from '@src/assets/icons/ic_linkedin.svg';
import { ReactComponent as IcMail } from '@src/assets/icons/mail.svg';
import NullImage from '@src/assets/images/null_image.png';
import { PositionType } from '@src/lib/types/about';
import * as St from './style';

type MeberCardProps = {
  name: string;
  position: PositionType;
  description?: string;
  currentProject: string;
  imageSrc?: string;
  gmail?: string;
  linkedin?: string;
  github?: string;
};

const MemberCard = ({
  name,
  position,
  description,
  currentProject,
  imageSrc,
  gmail,
  linkedin,
  github,
}: MeberCardProps) => {
  return (
    <St.Card>
      <St.ImageWrapper>
        <St.ProfileImage
          src={imageSrc || NullImage.src}
          alt={`${name}의 프로필`}
          fill
          sizes="100%"
        />
      </St.ImageWrapper>
      <St.NameWrapper>
        <St.Position>{position}</St.Position>
        <St.Name>{name}</St.Name>
      </St.NameWrapper>
      <St.CurrentProject>{currentProject}</St.CurrentProject>
      <St.Desc>{description || '-'}</St.Desc>
      <St.LinkWrapper>
        {gmail && (
          <St.AnchorIconWrapper href={`mailto:${gmail}`} target="_blank">
            <IcMail />
          </St.AnchorIconWrapper>
        )}
        {linkedin && (
          <St.AnchorIconWrapper href={`https://www.linkedin.com/in/${linkedin}`} target="_blank">
            <IcLinkedin />
          </St.AnchorIconWrapper>
        )}
        {github && (
          <St.AnchorIconWrapper href={`https://github.com/${github}`} target="_blank">
            <IcGithub />
          </St.AnchorIconWrapper>
        )}
      </St.LinkWrapper>
    </St.Card>
  );
};

export default MemberCard;
