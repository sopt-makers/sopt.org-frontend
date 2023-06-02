import { useState } from 'react';

interface ExtraTabType {
  type: string;
}

export function useTabs<T extends ExtraTabType>(initialTab: T, allTabs: T[]) {
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
