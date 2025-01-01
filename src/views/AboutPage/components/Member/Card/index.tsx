import { ReactComponent as IcBehance } from '@src/assets/icons/ic_behance.svg';
import { ReactComponent as IcGithub } from '@src/assets/icons/ic_github.svg';
import { ReactComponent as IcLinkedin } from '@src/assets/icons/ic_linkedin.svg';
import { ReactComponent as IcMail } from '@src/assets/icons/mail.svg';
import NullImage from '@src/assets/images/null_image.png';
import { MemberType } from '@src/lib/types/admin';
import * as St from './style';

const MemberCard = ({
  name,
  role,
  introduction,
  affiliation,
  profileImage,
  sns: { email, linkedin, github, behance },
}: MemberType) => {
  return (
    <St.Card>
      <St.ImageWrapper>
        <St.ProfileImage
          src={profileImage || NullImage.src}
          alt={`${name}의 프로필`}
          fill
          sizes="100%"
        />
      </St.ImageWrapper>
      <St.NameWrapper>
        <St.Position>{role}</St.Position>
        <St.Name>{name}</St.Name>
      </St.NameWrapper>
      <St.CurrentProject>{affiliation}</St.CurrentProject>
      <St.Desc>{introduction || '-'}</St.Desc>
      <St.LinkWrapper>
        {email && (
          <St.AnchorIconWrapper href={`mailto:${email}`} target="_blank">
            <IcMail />
          </St.AnchorIconWrapper>
        )}
        {linkedin && (
          <St.AnchorIconWrapper href={linkedin} target="_blank">
            <IcLinkedin />
          </St.AnchorIconWrapper>
        )}
        {github && (
          <St.AnchorIconWrapper href={github} target="_blank">
            <IcGithub />
          </St.AnchorIconWrapper>
        )}
        {behance && (
          <St.AnchorIconWrapper href={behance} target="_blank">
            <IcBehance />
          </St.AnchorIconWrapper>
        )}
      </St.LinkWrapper>
    </St.Card>
  );
};

export default MemberCard;
