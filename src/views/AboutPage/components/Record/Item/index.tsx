import Flex from '@src/components/common/Flex';
import NumberRoller from '@src/components/common/NumberRoller';
import * as St from './style';

type RecordItemProps = {
  href: string;
  title: string;
  countNumber?: number;
  countString?: string;
};

const RecordItem = (props: RecordItemProps) => {
  return (
    <St.LinkWrapper href={props.href}>
      <Flex
        dir="column"
        gap={{ mobile: 4, tablet: 8, desktop: 8 }}
        style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}
      >
        <St.Title>{props.title}</St.Title>
        <St.Count>
          {props.countNumber && <NumberRoller goalNumber={props.countNumber} />}
          {props.countString && <span>{props.countString}</span>}
        </St.Count>
      </Flex>
    </St.LinkWrapper>
  );
};

export default RecordItem;
