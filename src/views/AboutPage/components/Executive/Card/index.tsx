import { ReactComponent as IcSchool } from '@src/assets/icons/ic_school.svg';
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
      <St.ProfileContentWrapper>
        <St.ImageWrapper>
          <St.ProfileImage
            src={profileImage || NullImage.src}
            alt={`${name}의 프로필`}
            fill
            sizes="100%"
            quality={80}
            unoptimized
          />
        </St.ImageWrapper>

        <St.ContentWrapper>
          <St.NameWrapper>
            <St.Position>{role}</St.Position>
            <St.Name>{name}</St.Name>
          </St.NameWrapper>
          <St.UniversityWrapper>
            <St.IcSchoolIconWrapper>
              <IcSchool />
            </St.IcSchoolIconWrapper>
            <span>{affiliation}</span>
          </St.UniversityWrapper>
          <St.Desc>{introduction || '-'}</St.Desc>
        </St.ContentWrapper>
      </St.ProfileContentWrapper>

      <St.LinkWrapper>
        {email && (
          <St.AnchorIconWrapper href={`mailto:${email}`} target="_blank">
            <St.IcMailIcon />
          </St.AnchorIconWrapper>
        )}
        {linkedin && (
          <St.AnchorIconWrapper href={linkedin} target="_blank">
            <St.IcLinkedinIcon />
          </St.AnchorIconWrapper>
        )}
        {github && (
          <St.AnchorIconWrapper href={github} target="_blank">
            <St.IcGithubIcon />
          </St.AnchorIconWrapper>
        )}
        {behance && (
          <St.AnchorIconWrapper href={behance} target="_blank">
            <St.IcBehanceIcon />
          </St.AnchorIconWrapper>
        )}
      </St.LinkWrapper>
    </St.Card>
  );
};

export default MemberCard;
