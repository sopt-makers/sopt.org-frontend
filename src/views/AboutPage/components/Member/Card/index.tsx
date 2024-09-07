import { ReactComponent as IcBehance } from '@src/assets/icons/ic_behance.svg';
import { ReactComponent as IcGithub } from '@src/assets/icons/ic_github.svg';
import { ReactComponent as IcLinkedin } from '@src/assets/icons/ic_linkedin.svg';
import { ReactComponent as IcMail } from '@src/assets/icons/mail.svg';
import NullImage from '@src/assets/images/null_image.png';
import { MemberType } from '@src/lib/types/about';
import * as St from './style';

type MemberCardProps = Omit<MemberType, 'id'>;

const MemberCard = ({
  name,
  position,
  description,
  currentProject,
  imageSrc,
  gmail,
  linkedin,
  github,
  behance,
}: MemberCardProps) => {
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
        {behance && (
          <St.AnchorIconWrapper href={`https://www.behance.net/${behance}`} target="_blank">
            <IcBehance />
          </St.AnchorIconWrapper>
        )}
      </St.LinkWrapper>
    </St.Card>
  );
};

export default MemberCard;
