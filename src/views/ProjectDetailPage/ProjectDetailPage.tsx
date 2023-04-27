import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { ReactComponent as IToggle } from '@src/assets/images/toggle.svg';
import { Footer, Header, Layout, ScrollToTopButton } from '@src/components';
import { api } from '@src/lib/api';
import { ProjectLinkType } from '@src/lib/types/project';
import { dateFormat } from '@src/utils/dateFormat';
import * as S from './ProjectDetail.style';
import { TeamMembersType } from './types';
import { getLinkNameAndSrcWithType } from './utils/getLinkNameAndSrcWithType';

const projectOverviewTitle = [
  '프로젝트 기간',
  '진행 기수',
  '프로젝트 형태',
  '프로젝트 상태',
  '프로젝트 링크',
];

function ProjectDetailPage() {
  const router = useRouter();
  const id = router.query.id as string;
  const { data } = useQuery('projectDetail', () => api.projectAPI.getProjectDetail(+id), {
    enabled: !!id,
    select: (response) => response.project,
  });
  const [isOverviewOpened, setIsOverviewOpened] = useState(true);
  const [isTeamMemberOpened, setIsTeamMemberOpened] = useState(false);
  if (!data) return;

  const {
    projectImage,
    logoImage,
    name,
    summary,
    generation,
    serviceTypes,
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
      <ScrollToTopButton />
      <S.Root>
        <S.Container>
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
              <Image src={projectImage} alt="project image" fill />
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
                  <S.ProjectInfo isLinkExist={link.length !== 0}>
                    <div>
                      {projectOverviewTitle.map((title) => (
                        <h1 key={title}>{title}</h1>
                      ))}
                    </div>

                    <div>
                      <span>
                        {dateFormat(startAt)} - {dateFormat(endAt) || '진행중'}
                      </span>
                      <span>{generation ? generation + '기' : '-'}</span>
                      <span>
                        {serviceTypes
                          .map((type: string) => (type === 'WEB' ? '웹' : '앱'))
                          .join(', ')}
                      </span>
                      <span>
                        {!isAvailable && !isFounding
                          ? '-'
                          : isAvailable && !isFounding
                          ? '운영중'
                          : !isAvailable && isFounding
                          ? '창업중'
                          : '운영중, 창업중'}
                      </span>
                      <span>{link.length ? link.length + '개' : '-'}</span>
                    </div>
                  </S.ProjectInfo>
                  <S.ProjectLinkWrapper>
                    {link.map(({ title, url }: ProjectLinkType) => {
                      const { name, src } = getLinkNameAndSrcWithType(title);
                      return (
                        <Link href={url} key={title}>
                          <S.ProjectLink>
                            <S.ImageWrapper>
                              <Image src={src} alt={name} width="56" height="56" />
                            </S.ImageWrapper>
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
              <S.Title>프로젝트 설명</S.Title>
              <p>{detail}</p>
            </S.ProjectDescription>
          </S.ProjectWrapper>
        </S.Container>
      </S.Root>
      <Footer />
    </Layout>
  );
}

export default ProjectDetailPage;
