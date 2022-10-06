import CommonError from '@src/components/common/CommonError';
import ErrorBoundary from '@src/components/common/ErrorBoundary';
import SSRSafeSuspense from '@src/components/common/SSRSafeSuspense';
import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import ProjectCard from '@src/components/Partners/Projects/ProjectCard';
import { getPartnersData } from '@src/lib/api';
import { useQuery } from 'react-query';
import { ClipLoader } from 'react-spinners';

import * as S from './Projects.style';

interface dataType {
  id: string;
  posterImage: string;
  year: number;
  title: string;
  content: string;
  subContent: string;
}

const Projects = () => {
  return (
    <ErrorBoundary
      renderFallback={({ error, reset }) => <CommonError error={error} reset={reset} />}
    >
      {/*  TODO skeleton 추가 */}
      <SSRSafeSuspense fallback={<ClipLoader size={50} color={'#ffffff'} />}>
        <Resolved />
      </SSRSafeSuspense>
    </ErrorBoundary>
  );
};

function Resolved() {
  const { data } = useQuery('partners', () => getPartnersData(), {
    suspense: true,
  });

  return (
    <S.Root>
      <UnderlinedTitle>{'PROJECT\nwith SOPT'}</UnderlinedTitle>
      <S.Description>
        다양한 기업 및 단체에서 SOPT와 협력 프로젝트를 진행하고 있습니다.
      </S.Description>
      <S.ProjectWrap>
        {data?.data?.projects?.map((item: dataType) => (
          <ProjectCard
            key={item.id}
            imageSrc={item.posterImage}
            year={item.year}
            title={item.title}
            description={item.content}
            etc={item.subContent}
          />
        ))}
      </S.ProjectWrap>
    </S.Root>
  );
}

export default Projects;
