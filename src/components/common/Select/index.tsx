import { useCallback, useRef, useState } from 'react';
import useOutsideClickListener from '@src/hooks/useOutsideClickListener';
import { LabelKeyType } from '@src/lib/types/universal';
import { St } from './style';

interface SelectProps<T extends LabelKeyType> {
  options: T[];
  baseValue: T;
  baseLabel: string;
  selectedValue: T;
  setSelectedValue: React.Dispatch<React.SetStateAction<T>>;
  labels: Record<T, string>;
}

export default function Select<T extends LabelKeyType>({
  options,
  selectedValue,
  setSelectedValue,
  baseValue,
  baseLabel,
  labels,
}: SelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSelect = () => setIsOpen(!isOpen);

  const handleSelect = (value: T) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const closeSelectItem = useCallback(() => setIsOpen(false), []);

  const selectItemWrapperRef = useRef<HTMLDivElement>(null);
  const selectTriggerRef = useRef<HTMLButtonElement>(null);
  useOutsideClickListener([selectItemWrapperRef, selectTriggerRef], closeSelectItem);

  return (
    <div>
      <St.SelectTrigger
        ref={selectTriggerRef}
        onClick={toggleSelect}
        isSelectionExist={selectedValue !== baseValue}
        isOpened={isOpen}
      >
        {selectedValue === baseValue ? baseLabel : labels[selectedValue]}
      </St.SelectTrigger>
      {isOpen && (
        <St.SelectItemWrapper ref={selectItemWrapperRef}>
          {options.map((option, index) => (
            <St.SelectItem
              key={index}
              isSelected={selectedValue === option}
              onClick={() => handleSelect(option)}
            >
              {labels[option]}
            </St.SelectItem>
          ))}
        </St.SelectItemWrapper>
      )}
    </div>
  );
}
