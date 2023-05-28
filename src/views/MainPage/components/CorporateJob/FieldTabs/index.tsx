import { JobField } from '@src/lib/types/job';
import { fieldTabs } from '..';
import { St } from './style';

interface FieldTabsProps {
  currentTab: { type: JobField; text: string };
  changeTab: (tabType: string) => void;
}

const FieldTabs = ({ currentTab, changeTab }: FieldTabsProps) => {
  return (
    <St.Ul>
      {fieldTabs.map(({ type, text }) => (
        <St.Li key={type} onClick={() => changeTab(type)} isactive={type === currentTab.type}>
          {text}
        </St.Li>
      ))}
    </St.Ul>
  );
};

export default FieldTabs;
