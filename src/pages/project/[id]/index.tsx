import { NextPageContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ReactComponent as IToggle } from '@src/assets/images/toggle.svg';
import PageLayout from '@src/components/common/PageLayout';
import SEO from '@src/components/common/SEO';
import { api } from '@src/lib/api';
import { GetProjectDetailResponse, ProjectLinkType } from '@src/lib/types/project';
import { dateFormat } from '@src/lib/utils/dateFormat';
import { getLinkNameAndSrcWithType } from '@src/lib/utils/getLinkNameAndSrcWithType';
import * as S from '@src/views/ProjectDetailPage/style';
import { TeamMembersType } from '@src/views/ProjectDetailPage/types';

const projectOverviewTitle = [
  '프로젝트 기간',
  '진행 기수',
  '프로젝트 형태',
  '프로젝트 상태',
  '프로젝트 링크',
];

function ProjectDetailPage({ project }: GetProjectDetailResponse) {
  const [isOverviewOpened, setIsOverviewOpened] = useState(true);
  const [isTeamMemberOpened, setIsTeamMemberOpened] = useState(false);
  if (!project) return;

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
    links,
    members,
    detail,
  } = project;

  return (
    <>
      <SEO projectTitle={name} projectImageURL={projectImage} />

      <PageLayout showScrollTopButton>
        <S.Root>
          <S.Container>
            <S.ProjectHeader>
              <S.LogoImageWrapper>
                <Image src={logoImage} alt={`${name} 프로젝트 로고`} width="72" height="72" />
              </S.LogoImageWrapper>
              <div>
                <h1>{name}</h1>
                <p>{summary}</p>
              </div>
            </S.ProjectHeader>
            {projectImage && (
              <S.ProjectImageWrapper>
                <Image src={projectImage} alt={`${name} 프로젝트 썸네일`} fill />
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
                    <S.ProjectInfo isLinkExist={links.length !== 0}>
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
                          {serviceType
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
                        <span>{links.length ? links.length + '개' : '-'}</span>
                      </div>
                    </S.ProjectInfo>
                    <S.ProjectLinkWrapper>
                      {links.map(({ title, url }: ProjectLinkType) => {
                        const { name, src } = getLinkNameAndSrcWithType(title);
                        return (
                          <Link href={url} key={title}>
                            <S.ProjectLink>
                              <S.ImageWrapper>
                                <Image src={src} alt={`${name} 로고`} width="56" height="56" />
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
      </PageLayout>
    </>
  );
}

export default ProjectDetailPage;

export const getServerSideProps = async ({ query }: NextPageContext) => {
  const id = query.id as string;
  const { project } = await api.projectAPI.getProjectDetail(+id);
  return {
    props: { project },
  };
};
