import { useState } from 'react';
import { MobileFilterModal } from './MobileFilterModal';
import { MobileUtilityButtons } from './MobileUtilityButtons';
import { CategoryType } from '../lib/constants';
import { Condition } from '@src/lib';

type MobileFilterProps = {
  selectedCategory: CategoryType | undefined;
  setCategory: (args: CategoryType) => void;
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
