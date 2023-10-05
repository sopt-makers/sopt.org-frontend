import { extraTabs, tabs } from '@src/lib/constants/tabs';
import { ExtraPart, ExtraTabType, Part, TabType } from '@src/lib/types/universal';
import * as St from './style';

type TabBarPropsIncludedExtra = {
  includesExtra: true;
  selectedTab: ExtraPart;
  onTabClick(tab: ExtraTabType): void;
};
type TabBarPropsNoExtra = {
  includesExtra: false;
  selectedTab: Part;
  onTabClick(tab: TabType): void;
};
type TabBarProps = TabBarPropsIncludedExtra | TabBarPropsNoExtra;

const TabBar = ({ includesExtra, onTabClick, selectedTab }: TabBarProps) => {
  if (includesExtra)
    return (
      <St.TabBar>
        {extraTabs.map((tab) => (
          <Tab
            key={tab.value}
            onClick={() => onTabClick(tab)}
            label={tab.label}
            selected={selectedTab === tab.value}
          />
        ))}
      </St.TabBar>
    );

  return (
    <St.TabBar>
      {tabs.map((tab) => (
        <Tab
          key={tab.value}
          onClick={() => onTabClick(tab)}
          label={tab.label}
          selected={selectedTab === tab.value}
        />
      ))}
    </St.TabBar>
  );
};

type TabProps = {
  onClick(): void;
  label: string;
  selected: boolean;
};

const Tab = ({ onClick, label, selected }: TabProps) => (
  <St.Tab selected={selected} onClick={onClick}>
    {label}
  </St.Tab>
);

export default TabBar;
