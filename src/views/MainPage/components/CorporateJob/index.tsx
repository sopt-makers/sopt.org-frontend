import { JobField } from '@src/lib/types/job';
import { useTabs } from '../../lib';
import FieldTabs from './FieldTabs';
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

  return (
    <St.Root>
      <St.Title>채용 공고</St.Title>
      <FieldTabs currentTab={currentTab} changeTab={changeTab} />
    </St.Root>
  );
};

export default CorporateJob;
