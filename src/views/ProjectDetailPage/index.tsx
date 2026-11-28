import PageLayout from '@src/components/common/PageLayout';
import SEO from '@src/components/common/SEO';
import { projectCategoryLabel } from '@src/lib/constants/project';
import { GetProjectDetailResponse, LinkType, ProjectLinkType } from '@src/lib/types/project';
import ProjectLinks from './ProjectLinks';
import RelatedProjects from './RelatedProjects';
import StatusBadges from './StatusBadges';
import * as S from './style';

const isServiceLink = ({ title }: ProjectLinkType) =>
  [LinkType.웹사이트, LinkType['앱 스토어'], LinkType['구글 플레이스토어']].includes(title);

export default function ProjectDetailPage({
  project: {
    id,
    isFounding,
    isAvailable,
    name,
    logoImage,
    projectImage,
    thumbnailImage,
    summary,
    serviceType,
    generation,
    category,
    detail,
    members,
    links,
  },
}: GetProjectDetailResponse) {
  const platforms = serviceType.filter(Boolean).join(' ∙ ');
  const image = projectImage || thumbnailImage;
  const availableLinks = links.filter(({ url }) => /^https?:\/\//i.test(url));
  const serviceLinks = availableLinks.filter(isServiceLink);
  const channelLinks = availableLinks.filter((link) => !isServiceLink(link));
  const roles = Array.from(new Set(members.map((member) => member.role)));

  return (
    <PageLayout>
      <SEO projectTitle={name} projectImageURL={image} />
      <S.Root>
        <S.Content>
          <S.Hero>
            <StatusBadges isFounding={isFounding} isAvailable={isAvailable} />
            <S.TitleRow>
              <S.Identity>
                <S.Logo>{logoImage && <S.Image src={logoImage} alt="" />}</S.Logo>
                <div>
                  <S.NameRow>
                    <S.Title>{name}</S.Title>
                    <S.Platform>{platforms}</S.Platform>
                  </S.NameRow>
                  <S.Summary>{summary}</S.Summary>
                </div>
              </S.Identity>
              <ProjectLinks type="service" links={serviceLinks} />
            </S.TitleRow>
          </S.Hero>

          <S.Body>
            <S.MainColumn>
              <S.Cover>{image && <S.Image src={image} alt={name + ' 프로젝트 이미지'} />}</S.Cover>
              <S.Intro>
                <S.Heading>서비스 소개</S.Heading>
                <S.Description>{detail}</S.Description>
              </S.Intro>
            </S.MainColumn>

            <S.Aside>
              <S.Facts>
                <section>
                  <S.Label>프로젝트 요약</S.Label>
                  <S.Panel>
                    <S.Row>
                      <S.Term>기수</S.Term>
                      <dd>{generation ? generation + '기' : '–'}</dd>
                    </S.Row>
                    <S.Row>
                      <S.Term>활동</S.Term>
                      <dd>{(category && projectCategoryLabel[category.project]) || '–'}</dd>
                    </S.Row>
                    <S.Row>
                      <S.Term>플랫폼</S.Term>
                      <dd>{platforms || '–'}</dd>
                    </S.Row>
                  </S.Panel>
                </section>
                {channelLinks.length > 0 && (
                  <section>
                    <S.Label>프로젝트 링크</S.Label>
                    <ProjectLinks type="channel" links={channelLinks} />
                  </section>
                )}
              </S.Facts>

              {roles.length > 0 && (
                <S.Team>
                  <S.Label>프로젝트 팀원</S.Label>
                  <S.TeamPanel>
                    {roles.map((role) => (
                      <S.TeamRow key={role}>
                        <S.Term>{role}</S.Term>
                        <S.Members>
                          {members
                            .filter((member) => member.role === role)
                            .map((member, index) => (
                              <S.Member key={index} title={member.description}>
                                {member.name}
                              </S.Member>
                            ))}
                        </S.Members>
                      </S.TeamRow>
                    ))}
                  </S.TeamPanel>
                </S.Team>
              )}
            </S.Aside>
          </S.Body>
          <RelatedProjects currentId={id} />
        </S.Content>
      </S.Root>
    </PageLayout>
  );
}
