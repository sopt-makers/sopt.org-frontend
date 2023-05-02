import Flex from '@src/components/common/Flex';
import { CoreValueType } from '@src/lib/types/about';
import SectionDescription from '../../common/SectionDescription';
import SectionTitle from '../../common/SectionTitle';
import CoreValueList from '../List';
import * as St from './style';

type CoreValueSectionProps = {
  mainDescription: string;
  coreValues: CoreValueType[];
};

const CoreValueSection = ({ mainDescription, coreValues }: CoreValueSectionProps) => {
  return (
    <St.CoreValueSectionWrapper>
      <St.MarginBanner />
      <Flex dir="column" gap={{ mobile: 32, tablet: 48, desktop: 48 }}>
        <Flex dir="column" gap={{ mobile: 8, tablet: 20, desktop: 28 }}>
          <SectionTitle>핵심 가치</SectionTitle>
          <SectionDescription>{mainDescription}</SectionDescription>
        </Flex>
        <CoreValueList coreValues={coreValues} />
      </Flex>
    </St.CoreValueSectionWrapper>
  );
};

export default CoreValueSection;
