import { track } from '@amplitude/analytics-browser';
import { useState } from 'react';
import { ExtraPart, PartExtraType } from '@src/lib/types/universal';
import Reviews from '../Reviews';
import TabBar from '../TabBar';

const Content = () => {
  const [selectedTab, setSelectedTab] = useState<ExtraPart>(PartExtraType.ALL);

  const onTabClick = (tab: ExtraPart) => {
    track('click_review_part', { part: tab });
    setSelectedTab(tab);
  };

  return (
    <>
      <TabBar onTabClick={onTabClick} selectedTab={selectedTab} />
      <Reviews selectedTab={selectedTab} />
    </>
  );
};

export default Content;
