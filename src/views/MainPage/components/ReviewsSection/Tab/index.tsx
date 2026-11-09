import { ReactNode, createContext, useContext } from 'react';
import * as S from '../style';

const TabContext = createContext<{
  selectedTab: string;
  onSelect: (tab: string) => void;
} | null>(null);

function useTabContext() {
  const context = useContext(TabContext);
  if (!context) throw new Error('Tab 컴포넌트는 Tab.Container 내부에서 사용해주세요.');
  return context;
}

interface TabContainerProps {
  selectedTab: string;
  onSelect: (tab: string) => void;
  children: ReactNode;
}

function Container({ selectedTab, onSelect, children }: TabContainerProps) {
  return (
    <TabContext.Provider value={{ selectedTab, onSelect }}>
      <S.Content>{children}</S.Content>
    </TabContext.Provider>
  );
}

interface TabListProps {
  children: ReactNode;
}

function List({ children }: TabListProps) {
  return <S.Tabs aria-label="후기 카테고리">{children}</S.Tabs>;
}

interface TabItemProps {
  value: string;
}

function Item({ value }: TabItemProps) {
  const { selectedTab, onSelect } = useTabContext();
  const selected = selectedTab === value;

  return (
    <S.Tab
      type="button"
      selected={selected}
      aria-pressed={selected}
      onClick={() => onSelect(value)}
    >
      {value}
    </S.Tab>
  );
}

interface TabPanelProps {
  tab: string;
  children: ReactNode;
}

function Panel({ tab, children }: TabPanelProps) {
  const { selectedTab } = useTabContext();
  return selectedTab === tab ? <S.List>{children}</S.List> : null;
}

const Tab = { Container, List, Item, Panel };
export default Tab;
