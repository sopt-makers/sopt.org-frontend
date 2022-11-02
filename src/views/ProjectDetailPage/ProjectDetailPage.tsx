import { ReactComponent as IToggle } from '@src/assets/images/toggle.svg';
import { Header, Footer, Layout } from '@src/components';
import { getProjectDetail } from '@src/lib/project';
import { dateFormat } from '@src/utils/dateFormat';
import { debounce } from '@src/utils/scrollDebounce';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import UpButton from './components/UpButton';
import { projectOverviewTitle } from './constants/contants';

import * as S from './ProjectDetail.style';
import { LinkType, TeamMembersType } from './types';
import { getLinkNameAndSrcWithType } from './utils/getLinkNameAndSrcWithType';

const SCROLL_MINIMUM_VALUE = 120;

function ProjectDetailPage() {
  const { data } = useQuery('projectDetail', () => getProjectDetail(0));
  const [isOverviewOpened, setIsOverviewOpened] = useState(false);
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
    projectImageUrl,
    logoImageUrl,
    name,
    shortIntroduction,
    semester,
    serviceType,
    startDate,
    endDate,
    inProgress,
    isBusinessing,
    isProvidingService,
    link,
    teamMembers,
    detail,
  } = data;

  return (
    <Layout>
      <Header />
      <UpButton isScrolled={isScrolled} />

      <S.Root>
        <S.ProjectHeader>
          <S.LogoImageWrapper>
            <Image src={logoImageUrl} alt="logo" width="56" height="56" />
          </S.LogoImageWrapper>
          <div>
            <h1>{name}</h1>
            <p>{shortIntroduction}</p>
          </div>
        </S.ProjectHeader>

        {projectImageUrl && (
          <S.ProjectImageWrapper>
            <Image src={projectImageUrl} alt="project image" layout="fill" />
          </S.ProjectImageWrapper>
        )}
        <S.ProjectWrapper>
          <S.ToggleSection>
            <S.ProjectOverview isOverviewOpened={isOverviewOpened}>
              <S.ToggleWrapper onClick={() => setIsOverviewOpened((prev) => !prev)}>
                <S.Title>프로젝트 요약</S.Title>
                <button type="button">
                  <S.OverviewToggleImage isOverviewOpened={isOverviewOpened}>
                    <IToggle />
                  </S.OverviewToggleImage>
                </button>
              </S.ToggleWrapper>
              <S.ProjectOverviewDetail isOverviewOpened={isOverviewOpened}>
                <S.ProjectInfo>
                  <div>
                    {projectOverviewTitle.map((title) => (
                      <h1 key={title}>{title}</h1>
                    ))}
                  </div>

                  <div>
                    <span>
                      {dateFormat(startDate)} - {inProgress ? '진행중' : dateFormat(endDate)}
                    </span>
                    <span>{semester ? semester + '기' : '-'}</span>
                    <span>
                      {serviceType.map((type: string) => (type === 'WEB' ? '웹' : '앱')).join(', ')}
                    </span>
                    <span>
                      {isProvidingService && '운영중'}
                      {isBusinessing && '창업중'}
                    </span>
                    <span>{link.length ? link.length + '개' : '-'}</span>
                  </div>
                </S.ProjectInfo>
                <S.ProjectLinkWrapper>
                  {link.map(({ type, url }: LinkType) => {
                    const { name, src } = getLinkNameAndSrcWithType(type);

                    return (
                      <Link href={url} key={type}>
                        <S.ProjectLink>
                          <Image src={src} alt={type} width="56" height="56" />
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
                <S.Title>프로젝트 팀원</S.Title>
                <button type="button">
                  <S.TeamMemberToggleImage isTeamMemberOpened={isTeamMemberOpened}>
                    <IToggle />
                  </S.TeamMemberToggleImage>
                </button>
              </S.ToggleWrapper>
              <S.TeamMembers isTeamMemberOpened={isTeamMemberOpened}>
                {teamMembers.map(({ name, role, roleDetail }: TeamMembersType) => (
                  <S.Members key={name}>
                    <h1>{role}</h1>

                    <S.MemberDetail>
                      <h1>{name}</h1>
                      <p>{roleDetail}</p>
                    </S.MemberDetail>
                  </S.Members>
                ))}
              </S.TeamMembers>
            </S.ProjectTeam>
          </S.ToggleSection>

          <S.ProjectDescription>
            <S.Title>프로젝트 설명</S.Title>
            <p>{detail}</p>
          </S.ProjectDescription>
        </S.ProjectWrapper>
      </S.Root>
      <Footer />
    </Layout>
  );
}

export default ProjectDetailPage;
