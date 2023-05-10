import Flex from '@src/components/common/Flex';
import { CoreValueType } from '@src/lib/types/about';
import CoreValueItem from '../Item';

type CoreValueListProps = {
  coreValues: CoreValueType[];
};

const CoreValueList = ({ coreValues }: CoreValueListProps) => {
  return (
    <Flex
      dir={{ mobile: 'column', tablet: 'row', desktop: 'row' }}
      gap={{ mobile: 20, tablet: 20, desktop: 30 }}
    >
      {coreValues.map((coreValue, idx) => (
        <CoreValueItem order={idx} coreValue={coreValue} key={coreValue.title} />
      ))}
    </Flex>
  );
};

export default CoreValueList;
