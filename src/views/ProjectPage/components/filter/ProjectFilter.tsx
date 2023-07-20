import styled from '@emotion/styled';
import { Dispatch, SetStateAction } from 'react';
import { ProjectCategoryType } from '@src/lib/types/project';

interface ProjectFilterPropType {
  selectedCategory: ProjectCategoryType;
  setCategory: Dispatch<SetStateAction<ProjectCategoryType>>;
}

const tabs = [
  { value: ProjectCategoryType.ALL, label: '전체' },
  { value: ProjectCategoryType.APPJAM, label: '앱잼' },
  { value: ProjectCategoryType.SOPKATHON, label: '솝커톤' },
  { value: ProjectCategoryType.SOPTERM, label: '솝텀프로젝트' },
  { value: ProjectCategoryType.STUDY, label: '스터디' },
  { value: ProjectCategoryType.JOINTSEMINAR, label: '합동세미나' },
  { value: ProjectCategoryType.ETC, label: '기타' },
];

export function ProjectFilter({ selectedCategory, setCategory }: ProjectFilterPropType) {
  return (
    <TabBar>
      {tabs.map((tab) => (
        <Tab
          key={tab.value}
          onClick={() => setCategory(tab.value)}
          selected={selectedCategory === tab.value}
        >
          {tab.label}
        </Tab>
      ))}
    </TabBar>
  );
}

export const TabBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`;

export const Tab = styled.div<{ selected: boolean }>`
  cursor: pointer;
  text-align: center;
  padding: 20px 0;
  border-radius: 10px;
  color: ${({ selected }) => (selected ? '#FFFFFF' : '#cccccc')};
  background-color: ${({ selected }) => (selected ? '#FFFFFF1A' : 'inherit')};
  font-size: 18px;

  min-width: 160px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  /* 태블릿 뷰 */
  @media (max-width: 765.9px) {
    min-width: 72px;
    padding: 12px 0;
    font-size: 12px;
  }
`;
