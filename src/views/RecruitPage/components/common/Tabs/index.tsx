import { ExtraPart, ExtraTabType, Part, PartExtraType, TabType } from '@src/lib/types/universal';
import * as S from './style';

type TabBarProps =
  | {
      type: 'with-all';
      selectedTab: ExtraPart;
      onTabClick(targetTab: ExtraPart): void;
    }
  | { type: 'without-all'; selectedTab: Part; onTabClick(targetTab: Part): void };

const allTabs: ExtraTabType[] = [
  {
    value: PartExtraType.ALL,
    label: '전체',
  },
  {
    value: Part.PLAN,
    label: '기획',
  },
  {
    value: Part.DESIGN,
    label: '디자인',
  },
  {
    value: Part.ANDROID,
    label: '안드로이드',
  },
  {
    value: Part.IOS,
    label: 'iOS',
  },
  {
    value: Part.WEB,
    label: '웹',
  },
  {
    value: Part.SERVER,
    label: '서버',
  },
];

const tabs: TabType[] = [
  {
    value: Part.PLAN,
    label: '기획',
  },
  {
    value: Part.DESIGN,
    label: '디자인',
  },
  {
    value: Part.ANDROID,
    label: '안드로이드',
  },
  {
    value: Part.IOS,
    label: 'iOS',
  },
  {
    value: Part.WEB,
    label: '웹',
  },
  {
    value: Part.SERVER,
    label: '서버',
  },
];

const TabBar = ({ type, onTabClick, selectedTab }: TabBarProps) => {
  if (type === 'with-all')
    return (
      <S.TabBar>
        {allTabs.map((tab) => (
          <Tab
            key={tab.value}
            onClick={() => onTabClick(tab.value)}
            tab={tab}
            selected={selectedTab === tab.value}
          />
        ))}
      </S.TabBar>
    );
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
  tab: ExtraTabType;
  selected: boolean;
};

const Tab = ({ onClick, tab, selected }: TabProps) => (
  <S.Tab selected={selected} onClick={onClick}>
    {tab.label}
  </S.Tab>
);

export default TabBar;
