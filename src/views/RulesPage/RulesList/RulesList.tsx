import { RULES } from '@src/assets/replaceMe/rules';
import CollapseLi from '../CollapseLi';
import * as S from './RulesList.style';

function RulesList() {
  return (
    <S.Ul>
      {RULES.map((item) => {
        return <CollapseLi key={item.title} title={item.title} contents={item.contents} />;
      })}
      ;
    </S.Ul>
  );
}

export default RulesList;
