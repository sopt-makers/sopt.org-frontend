import { CoreValueType } from '@src/lib/types/about';
import CoreValueItem from '../Item';
import * as S from './style';

type CoreValueListProps = {
  coreValues: CoreValueType[];
};

const CoreValueList = ({ coreValues }: CoreValueListProps) => {
  return (
    <S.CoreValueList>
      {coreValues.map((coreValue, idx) => (
        <CoreValueItem order={idx} coreValue={coreValue} key={coreValue.title} />
      ))}
    </S.CoreValueList>
  );
};

export default CoreValueList;
