import { ExtraPart, Part } from '@src/lib/types/universal';
import { extraTabs, tabs } from '@src/views/AboutPage/constant/taps';
import * as St from './style';

type TabBarPropsIncludedExtra = {
  includesExtra: true;
  selectedTab: ExtraPart;
  onTabClick(targetTab: ExtraPart): void;
};
type TabBarPropsNoExtra = {
  includesExtra: false;
  selectedTab: Part;
  onTabClick(targetTab: Part): void;
};
type TabBarProps = TabBarPropsIncludedExtra | TabBarPropsNoExtra;

const TabBar = ({ includesExtra, onTabClick, selectedTab }: TabBarProps) => {
  if (includesExtra)
    return (
      <St.TabBar>
        {extraTabs.map((tab) => (
          <Tab
            key={tab.value}
            onClick={() => onTabClick(tab.value)}
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
          onClick={() => onTabClick(tab.value)}
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
