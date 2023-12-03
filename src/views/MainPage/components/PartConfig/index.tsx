import { useState } from 'react';
import { tabs } from '@src/lib/constants/tabs';
import { Part } from '@src/lib/types/universal';
import PartButton from '@src/views/MainPage/components/PartConfig/PartButton.tsx';
import PartCarousel from '@src/views/MainPage/components/PartConfig/PartCarousel';
import * as S from './style';

export default function PartConfig() {
  const [selectedPart, setSelectedPart] = useState(Part.PLAN);

  const handleSelectPart = (part: Part) => {
    setSelectedPart(part);
  };

  return (
    <S.PartConfig>
      <S.PartButtonList>
        {tabs.map((part) => (
          <PartButton
            key={part.value}
            part={part}
            isSelected={selectedPart === part.value}
            onSelectPart={handleSelectPart}
          />
        ))}
      </S.PartButtonList>
      <PartCarousel selectedPart={selectedPart} />
    </S.PartConfig>
  );
}
