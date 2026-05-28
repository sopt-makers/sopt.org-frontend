import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { Suspense } from 'react';
import PageLayout from '@src/components/common/PageLayout';
import Select from '@src/components/common/Select';
import {
  activeProjectCategoryList,
  activeProjectPlatformList,
  projectCategoryLabel,
  projectPlatformLabel,
} from '@src/lib/constants/project';
import { ProjectCategoryType, ProjectPlatformType } from '@src/lib/types/project';
import { ProjectList } from '@src/views/ProjectPage/components/project/ProjectList';
import ProjectListFallback from '@src/views/ProjectPage/components/project/ProjectListFallback';
import S from './styles';

const INIT_PAGE = 1;

function Projects() {
  const router = useRouter();

  const selectedCategory = (router.query.category as ProjectCategoryType) ?? ProjectCategoryType.ALL;
  const selectedPlatform = (router.query.platform as ProjectPlatformType) ?? ProjectPlatformType.ALL;
  const currentPage = Number(router.query.page ?? INIT_PAGE);

  const updateQuery = (updates: Record<string, string | number>) => {
    router.push({ pathname: router.pathname, query: { ...router.query, ...updates } }, undefined, { shallow: true });
  };

  const setCategory = (category: ProjectCategoryType) => updateQuery({ category, page: INIT_PAGE });
  const setPlatform = (platform: ProjectPlatformType) => updateQuery({ platform, page: INIT_PAGE });
  const setPage = (page: number) => {
    updateQuery({ page });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PageLayout
      showScrollTopButton
      moreStyle={css`
        overflow-x: hidden;
      `}
    >
      <S.Root>
        <S.ContentWrapper>
          <S.SectionTitle>
            SOPT<span>에서 진행된</span> 프로젝트 둘러보기
          </S.SectionTitle>
          <S.FilterWrapper>
            <Select
              options={activeProjectCategoryList}
              labels={projectCategoryLabel}
              baseLabel="활동"
              selectedValue={selectedCategory}
              setSelectedValue={setCategory}
              baseValue={ProjectCategoryType.ALL}
            />
            <Select
              options={activeProjectPlatformList}
              labels={projectPlatformLabel}
              baseLabel="플랫폼"
              selectedValue={selectedPlatform}
              setSelectedValue={setPlatform}
              baseValue={ProjectPlatformType.ALL}
            />
          </S.FilterWrapper>
          <Suspense fallback={<ProjectListFallback />}>
            <ProjectList
              selectedCategory={selectedCategory}
              selectedPlatform={selectedPlatform}
              currentPage={currentPage}
              onPageChange={setPage}
            />
          </Suspense>
        </S.ContentWrapper>
      </S.Root>
    </PageLayout>
  );
}

export default Projects;
