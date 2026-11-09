import minus from '@src/assets/icons/ic_minus.svg';
import plus from '@src/assets/icons/ic_plus.svg';
import * as S from '../style';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQItem({ question, answer, index, isOpen, onToggle }: FAQItemProps) {
  return (
    <S.Item open={isOpen}>
      <S.Question
        type="button"
        aria-expanded={isOpen}
        aria-controls={`faq-${index}`}
        onClick={onToggle}
      >
        <S.QuestionMark>Q.</S.QuestionMark>
        <S.QuestionText>{question}</S.QuestionText>
        <S.Icon src={isOpen ? minus : plus} alt="" width={24} height={24} />
      </S.Question>

      <S.AnswerWrapper id={`faq-${index}`} open={isOpen} aria-hidden={!isOpen}>
        <S.AnswerInner>
          <S.Answer>{answer}</S.Answer>
        </S.AnswerInner>
      </S.AnswerWrapper>
    </S.Item>
  );
}
