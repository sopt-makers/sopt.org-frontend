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
        {data?.map(({ id, imgSrc, type, title, corporation, career, location }) => (
          <JobPostingCard
            key={id}
            imgSrc={imgSrc}
            type={type}
            title={title}
            corporation={corporation}
            career={career}
            location={location}
          />
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
