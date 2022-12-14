import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { ReactComponent as IToggle } from '@src/assets/images/toggle.svg';
import { Footer, Header, Layout } from '@src/components';
import { getProjectDetail } from '@src/lib/project';
import { dateFormat } from '@src/utils/dateFormat';
import { debounce } from '@src/utils/scrollDebounce';
import * as S from './ProjectDetail.style';
import UpButton from './components/UpButton';
import { projectOverviewTitle } from './lib/contants';
import { LinkType, TeamMembersType } from './types';
import { getLinkNameAndSrcWithType } from './utils/getLinkNameAndSrcWithType';

const SCROLL_MINIMUM_VALUE = 120;

function ProjectDetailPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const { data } = useQuery('projectDetail', () => getProjectDetail(+id), {
    enabled: !!id,
  });
  const [isOverviewOpened, setIsOverviewOpened] = useState(true);
  const [isTeamMemberOpened, setIsTeamMemberOpened] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const checkScroll = debounce(() => {
    window.scrollY > SCROLL_MINIMUM_VALUE ? setIsScrolled(true) : setIsScrolled(false);
  });

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [checkScroll]);

  if (!data) return;

  const {
    projectImage,
    logoImage,
    name,
    summary,
    generation,
    serviceType,
    startAt,
    endAt,
    isFounding,
    isAvailable,
    link,
    members,
    detail,
  } = data;

  return (
    <Layout>
      <Header />
      <UpButton isScrolled={isScrolled} />

      <S.Root>
        <S.ProjectHeader>
          <S.LogoImageWrapper>
            <Image src={logoImage} alt="logo" width="72" height="72" />
          </S.LogoImageWrapper>
          <div>
            <h1>{name}</h1>
            <p>{summary}</p>
          </div>
        </S.ProjectHeader>

        {projectImage && (
          <S.ProjectImageWrapper>
            <Image src={projectImage} alt="project image" layout="fill" />
          </S.ProjectImageWrapper>
        )}
        <S.ProjectWrapper>
          <S.ToggleSection>
            <S.ProjectOverview isOverviewOpened={isOverviewOpened}>
              <S.ToggleWrapper onClick={() => setIsOverviewOpened((prev) => !prev)}>
                <S.Title>???????????? ??????</S.Title>
                <button type="button">
                  <S.OverviewToggleImage isOverviewOpened={isOverviewOpened}>
                    <IToggle />
                  </S.OverviewToggleImage>
                </button>
              </S.ToggleWrapper>
              <S.ProjectOverviewDetail isOverviewOpened={isOverviewOpened}>
                <S.ProjectInfo isLinkExist={link.length !== 0}>
                  <div>
                    {projectOverviewTitle.map((title) => (
                      <h1 key={title}>{title}</h1>
                    ))}
                  </div>

                  <div>
                    <span>
                      {dateFormat(startAt)} - {dateFormat(endAt) || '?????????'}
                    </span>
                    <span>{generation ? generation + '???' : '-'}</span>
                    <span>
                      {[...serviceType]
                        .map((type: string) => (type === 'WEB' ? '???' : '???'))
                        .join(', ')}
                    </span>
                    <span>
                      {!isAvailable && !isFounding
                        ? '-'
                        : isAvailable && !isFounding
                        ? '?????????'
                        : !isAvailable && isFounding
                        ? '?????????'
                        : '?????????, ?????????'}
                    </span>
                    <span>{link.length ? link.length + '???' : '-'}</span>
                  </div>
                </S.ProjectInfo>
                <S.ProjectLinkWrapper>
                  {link.map(({ title, url }: LinkType) => {
                    const { name, src } = getLinkNameAndSrcWithType(title);

                    return (
                      <Link href={url} key={title}>
                        <S.ProjectLink>
                          <Image src={src} alt={name} width="56" height="56" />
                          <span>{name}</span>
                        </S.ProjectLink>
                      </Link>
                    );
                  })}
                </S.ProjectLinkWrapper>
              </S.ProjectOverviewDetail>
            </S.ProjectOverview>

            <S.ProjectTeam>
              <S.ToggleWrapper onClick={() => setIsTeamMemberOpened((prev) => !prev)}>
                <S.Title>???????????? ??????</S.Title>
                <button type="button">
                  <S.TeamMemberToggleImage isTeamMemberOpened={isTeamMemberOpened}>
                    <IToggle />
                  </S.TeamMemberToggleImage>
                </button>
              </S.ToggleWrapper>
              <S.TeamMembers isTeamMemberOpened={isTeamMemberOpened}>
                {members.map(({ name, role, description }: TeamMembersType, idx: number) => (
                  <S.Members key={idx}>
                    <h1>{role}</h1>

                    <S.MemberDetail>
                      <h1>{name}</h1>
                      <p>{description}</p>
                    </S.MemberDetail>
                  </S.Members>
                ))}
              </S.TeamMembers>
            </S.ProjectTeam>
          </S.ToggleSection>

          <S.ProjectDescription>
            <S.Title>???????????? ??????</S.Title>
            <p>{detail}</p>
          </S.ProjectDescription>
        </S.ProjectWrapper>
      </S.Root>
      <Footer />
    </Layout>
  );
}

export default ProjectDetailPage;
