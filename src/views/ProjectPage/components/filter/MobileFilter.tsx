import { useState } from 'react';
import { Condition } from '@src/lib';

import { ProjectCategoryType } from '../../lib/constants';
import { MobileUtilityButtons } from '../utility/MobileUtilityButtons';

import { MobileFilterModal } from './MobileFilterModal';

type MobileFilterProps = {
  selectedCategory: ProjectCategoryType;
  setCategory: (args: ProjectCategoryType) => void;
};

export function MobileFilter({ selectedCategory, setCategory }: MobileFilterProps) {
  const [isModalOpen, toggleModalState] = useState(false);

  return (
    <>
      <MobileUtilityButtons prevState={isModalOpen} toggleModalState={toggleModalState} />
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
