import Flex from '@src/components/common/Flex';
import * as St from './style';

type RecordItemProps = {
  href: string;
  title: string;
  count: string;
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
        <St.Count>{props.count}</St.Count>
      </Flex>
    </St.LinkWrapper>
  );
};

export default RecordItem;
