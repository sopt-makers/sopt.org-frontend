import { useCallback, useRef, useState } from 'react';
import useOutsideClickListener from '@src/hooks/useOutsideClickListener';
import { LabelKeyType } from '@src/lib/types/universal';
import { S } from './style';

interface SelectProps<T extends LabelKeyType> {
  options: T[];
  baseValue: T;
  baseLabel: string;
  selectedValue: T;
  setSelectedValue: (newValue: T) => void;
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
  };

  const closeSelectItem = useCallback(() => setIsOpen(false), []);

  const selectItemWrapperRef = useRef<HTMLDivElement>(null);
  const selectTriggerRef = useRef<HTMLButtonElement>(null);
  const currentSelectedValue = labels[selectedValue];
  useOutsideClickListener([selectItemWrapperRef, selectTriggerRef], closeSelectItem);

  return (
    <div>
      <S.SelectTrigger
        ref={selectTriggerRef}
        onClick={toggleSelect}
        isSelectionExist={selectedValue !== baseValue}
        isOpened={isOpen}
        isWide={currentSelectedValue.length >= 5}
      >
        <S.SelectTriggerContent isSelectionExist={selectedValue !== baseValue}>
          {selectedValue === baseValue ? baseLabel : currentSelectedValue}
        </S.SelectTriggerContent>
        <S.Arrow isOpened={isOpen} />
      </S.SelectTrigger>
      {isOpen && (
        <S.SelectItemWrapper ref={selectItemWrapperRef} isWide={currentSelectedValue.length >= 5}>
          {options.map((option, index) => (
            <S.SelectItem
              key={index}
              isSelected={selectedValue === option}
              onClick={() => handleSelect(option)}
            >
              <S.SelectItmeContent isWide={currentSelectedValue.length >= 5}>
                {labels[option]}
              </S.SelectItmeContent>
            </S.SelectItem>
          ))}
        </S.SelectItemWrapper>
      )}
    </div>
  );
}
