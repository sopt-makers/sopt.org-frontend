import { track } from '@amplitude/analytics-browser';
import { PropsWithChildren } from 'react';
import Flex from '@src/components/common/Flex';
import NumberRoller from '@src/components/common/NumberRoller';
import { RECORD_TITLE } from '@src/lib/constants/about';
import { RecordTitle } from '@src/lib/types/about';
import * as St from './style';

type RecordItemProps =
  | {
      type: 'link';
      href: string;
      title: RecordTitle;
      countNumber?: number;
      countString?: string;
    }
  | {
      type: 'block';
      title: RecordTitle;
      countNumber?: number;
      countString?: string;
    };

const RecordItemWrapper = (props: PropsWithChildren<RecordItemProps>) => {
  const trackRecordClick = () => {
    track(`click_about_${RECORD_TITLE[props.title]}`);
  };
  if (props.type == 'link')
    return (
      <St.LinkWrapper href={props.href} onClick={trackRecordClick}>
        {props.children}
      </St.LinkWrapper>
    );

  return <St.BlockWrapper>{props.children}</St.BlockWrapper>;
};

const RecordItem = (props: RecordItemProps) => {
  return (
    <RecordItemWrapper {...props}>
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
    </RecordItemWrapper>
  );
};

export default RecordItem;
