import { useState } from 'react';

interface TabType {
  type: string;
}

export function useTabs<T extends TabType>(initialTab: T, allTabs: T[]) {
  const [currentTab, setCurrentTab] = useState(initialTab);
  const changeTab = (tabType: string) => {
    const shouldChangeTab = allTabs.find(({ type }) => type === tabType);
    if (shouldChangeTab === undefined) {
      throw new Error(`Cannot Change Tab ${tabType}`);
    }
    setCurrentTab(shouldChangeTab);
  };

  return {
    currentTab: allTabs.find(({ type }) => type === currentTab.type) || initialTab,
    changeTab,
  };
}
