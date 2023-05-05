import { useState } from 'react';
import { Condition } from '@src/lib';
import { ProjectCategoryType } from '@src/lib/types/project';
import { MobileFilterModal } from './MobileFilterModal';
import { MobileUtilityButton } from './MobileUtilityButton';

type MobileFilterProps = {
  selectedCategory: ProjectCategoryType;
  setCategory: (args: ProjectCategoryType) => void;
};

export function MobileFilter({ selectedCategory, setCategory }: MobileFilterProps) {
  const [isModalOpen, toggleModalState] = useState(false);

  return (
    <>
      <MobileUtilityButton prevState={isModalOpen} toggleModalState={toggleModalState} />
      <Condition statement={isModalOpen}>
        <MobileFilterModal
          toggleModalState={toggleModalState}
          selectedCategory={selectedCategory}
          setCategory={setCategory}
        />
      </Condition>
    </>
  );
}
