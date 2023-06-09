import { Suspense } from 'react';
import { useTabs } from '@src/hooks/useTabs';
import { JobField } from '@src/lib/types/job';
import { OvalSpinner } from '@src/views/ProjectPage/components';
import FieldTabs from './FieldTabs';
import JobPostings from './JobPostings';
import { St } from './style';

export const fieldTabs = [
  {
    type: JobField.ALL,
    text: '전체',
  },
  {
    type: JobField.PM,
    text: '기획',
  },
  {
    type: JobField.DESIGN,
    text: '디자인',
  },
  {
    type: JobField.DEV,
    text: '개발',
  },
];

const CorporateJob = () => {
  const { currentTab, changeTab } = useTabs(fieldTabs[0], fieldTabs);
  const changeFieldTab = (tab: JobField) => {
    changeTab(tab);
  };

  return (
    <St.Root>
      <St.TitleWrapper>
        <St.BigTitle>후원</St.BigTitle>
        <St.Title>채용 공고</St.Title>
      </St.TitleWrapper>
      <FieldTabs currentTabType={currentTab.type} changeTab={changeFieldTab} />
      <Suspense
        fallback={
          <St.OvalSpinnerContainer>
            <OvalSpinner />
          </St.OvalSpinnerContainer>
        }
      >
        <JobPostings field={currentTab.type} />
      </Suspense>
    </St.Root>
  );
};

export default CorporateJob;
