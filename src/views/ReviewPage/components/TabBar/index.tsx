import { tabs } from '../../libs/constants';
import { TAB, TabType } from '../../types';
import * as S from './style';

type TabBarProps = {
  selectedTab: TAB;
  onTabClick(targetTab: TAB): void;
};

const TabBar = ({ onTabClick, selectedTab }: TabBarProps) => {
  return (
    <S.TabBar>
      {tabs.map((tab) => (
        <Tab
          key={tab.value}
          onClick={() => onTabClick(tab.value)}
          tab={tab}
          selected={selectedTab === tab.value}
        />
      ))}
    </S.TabBar>
  );
};

type TabProps = {
  onClick(): void;
  tab: TabType;
  selected: boolean;
};

const Tab = ({ onClick, tab, selected }: TabProps) => (
  <S.Tab selected={selected} onClick={onClick}>
    {tab.label}
  </S.Tab>
);

export default TabBar;
