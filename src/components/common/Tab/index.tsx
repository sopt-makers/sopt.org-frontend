import { HTMLAttributes, ReactNode, createContext, useContext } from 'react';

interface TabContextValue {
  selectedTab: string;
  onSelect: (tab: string) => void;
}

const TabContext = createContext<TabContextValue | null>(null);

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
    <TabContext.Provider value={{ selectedTab, onSelect }}>{children}</TabContext.Provider>
  );
}

interface TabListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function List({ children, className, ...props }: TabListProps) {
  return (
    <div role="tablist" className={className} {...props}>
      {children}
    </div>
  );
}

interface TabItemProps {
  value: string;
  children: ReactNode;
  className?: string;
}

function Item({ value, children, className }: TabItemProps) {
  const { selectedTab, onSelect } = useTabContext();
  const selected = selectedTab === value;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={selected}
      tabIndex={selected ? 0 : -1}
      className={className}
      onClick={() => onSelect(value)}
    >
      {children}
    </button>
  );
}

interface TabPanelProps {
  tab: string;
  children: ReactNode;
  className?: string;
}

function Panel({ tab, children, className }: TabPanelProps) {
  const { selectedTab } = useTabContext();
  const selected = selectedTab === tab;

  return (
    <div
      role="tabpanel"
      aria-label={tab}
      hidden={!selected}
      className={selected ? className : undefined}
      tabIndex={0}
    >
      {selected ? children : null}
    </div>
  );
}

const Tab = { Container, List, Item, Panel };
export default Tab;
