import { ComponentPropsWithoutRef, SVGProps, useCallback, useRef, useState } from 'react';
import IcChevronDown from '@src/assets/icons/ic_chevron-down.svg';
import useOutsideClickListener from '@src/hooks/useOutsideClickListener';
import { LabelKeyType } from '@src/lib/types/universal';
import * as S from './style';

type SelectProps<T extends LabelKeyType> = ComponentPropsWithoutRef<'div'> &
  ComponentPropsWithoutRef<'button'> & {
    options: T[];
    baseValue: T;
    baseLabel: string;
    selectedValue: T;
    setSelectedValue: (newValue: T) => void;
    labels: Record<T, string>;
    breakPoint: string;
    variant?: 'round' | 'square';
    icon?: SVGProps<SVGSVGElement>;
  };

export default function Select<T extends LabelKeyType>({
  options,
  selectedValue,
  setSelectedValue,
  baseValue,
  baseLabel,
  labels,
  breakPoint,
  variant = 'round',
  icon = IcChevronDown,
  ...props
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
        breakPoint={breakPoint}
        variant={variant}
        {...props}
      >
        <S.SelectTriggerContent
          isSelectionExist={selectedValue !== baseValue}
          breakPoint={breakPoint}
        >
          {selectedValue === baseValue ? baseLabel : currentSelectedValue}
        </S.SelectTriggerContent>
        <S.Arrow isOpened={isOpen} icon={icon} />
      </S.SelectTrigger>
      {isOpen && (
        <S.SelectItemWrapper
          ref={selectItemWrapperRef}
          isWide={currentSelectedValue.length >= 5}
          variant={variant}
          breakPoint={breakPoint}
          {...props}
        >
          {options.map((option, index) => (
            <S.SelectItem
              key={index}
              isSelected={selectedValue === option}
              variant={variant}
              onClick={() => handleSelect(option)}
            >
              <S.SelectItemContent
                isWide={currentSelectedValue.length >= 5}
                breakPoint={breakPoint}
              >
                {labels[option]}
              </S.SelectItemContent>
            </S.SelectItem>
          ))}
        </S.SelectItemWrapper>
      )}
    </div>
  );
}
