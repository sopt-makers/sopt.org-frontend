import { track } from '@amplitude/analytics-browser';
import { JobField } from '@src/lib/types/job';
import { fieldTabs } from '..';
import { St } from './style';

interface FieldTabsProps {
  currentTabType: JobField;
  changeTab: (tabType: JobField) => void;
}

const FieldTabs = ({ currentTabType, changeTab }: FieldTabsProps) => {
  return (
    <St.Ul>
      {fieldTabs.map(({ type, text }) => (
        <St.Li
          key={type}
          onClick={() => {
            changeTab(type);
            track('click_sponsor_recruit_part', { part: type });
          }}
          isactive={type === currentTabType}
        >
          {text}
        </St.Li>
      ))}
    </St.Ul>
  );
};

export default FieldTabs;
