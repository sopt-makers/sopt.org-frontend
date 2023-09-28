import { track } from '@amplitude/analytics-browser';
import { useState } from 'react';
import { ExtraPart, ExtraTabType, PartExtraType } from '@src/lib/types/universal';
import Sopticles from '../Sopticles';
import TabBar from '../TabBar';

const Content = () => {
  const [selectedTab, setSelectedTab] = useState<ExtraPart>(PartExtraType.ALL);

  const handleTabClick = (tab: ExtraTabType) => {
    setSelectedTab(tab.value);
    track('click_sopticle_part', { part: tab.label });
  };

  return (
    <>
      <TabBar onTabClick={handleTabClick} selectedTab={selectedTab} />
      <Sopticles selectedTab={selectedTab} />
    </>
  );
};

export default Content;
