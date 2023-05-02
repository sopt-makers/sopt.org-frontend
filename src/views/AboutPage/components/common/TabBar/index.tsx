import { ExtraPart, ExtraTabType, Part } from '@src/lib/types/universal';
import { TabType } from '@src/lib/types/universal';
import { tabs } from '@src/views/AboutPage/constant/taps';
import * as St from './style';

type TabBarProps = {
  selectedTab: ExtraPart;
  onTabClick(targetTab: Part): void;
};

const TabBar = ({ onTabClick, selectedTab }: TabBarProps) => {
  return (
    <St.TabBar>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {(tabs as any).slice(1).map((tab: TabType) => (
        <Tab
          key={tab.value}
          onClick={() => onTabClick(tab.value)}
          tab={tab}
          selected={selectedTab === tab.value}
        />
      ))}
    </St.TabBar>
  );
};

type TabProps = {
  onClick(): void;
  tab: ExtraTabType;
  selected: boolean;
};

const Tab = ({ onClick, tab, selected }: TabProps) => (
  <St.Tab selected={selected} onClick={onClick}>
    {tab.label}
  </St.Tab>
);

export default TabBar;
