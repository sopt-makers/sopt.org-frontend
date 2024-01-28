import { CoreValueType } from '@src/lib/types/about';
import SectionTop from '@src/views/AboutPage/components/common/SectionTop';
import CoreValueList from '../List';
import * as S from './style';

type CoreValueSectionProps = {
  mainDescription: string;
  coreValues: CoreValueType[];
};

const CoreValueSection = ({ mainDescription, coreValues }: CoreValueSectionProps) => {
  return (
    <S.CoreValueSection>
      <SectionTop engTitle="Core Value" korTitle="핵심 가치" description={mainDescription} />
      <CoreValueList coreValues={coreValues} />
    </S.CoreValueSection>
  );
};

export default CoreValueSection;
