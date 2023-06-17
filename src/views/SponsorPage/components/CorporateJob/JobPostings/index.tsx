import { useQuery } from 'react-query';
import JobPostingCard from '@src/components/corporate/JobPostingCard';
import { api } from '@src/lib/api';
import { JobField } from '@src/lib/types/job';
import { St } from './style';

interface JopPostingsProps {
  field: JobField;
}

const JobPostings = ({ field }: JopPostingsProps) => {
  const { data } = useGetCorporateJobsByField(field);

  return (
    <St.Root>
      <St.JobPostingsContainer>
        {data?.map(({ id, url, imgSrc, type, title, corporation, career, location }) => (
          <a key={id} href={url} target="_blank" rel="noreferrer">
            <JobPostingCard
              imgSrc={imgSrc}
              type={type}
              title={title}
              corporation={corporation}
              career={career}
              location={location}
            />
          </a>
        ))}
      </St.JobPostingsContainer>
    </St.Root>
  );
};

export default JobPostings;

const useGetCorporateJobsByField = (field: JobField) => {
  return useQuery(
    ['getCorporateJobsByField', field],
    () => api.jobAPI.getCorporateJobsByField(field),
    {
      staleTime: 10000,
      suspense: true,
    },
  );
};
