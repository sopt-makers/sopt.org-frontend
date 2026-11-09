import { useState } from 'react';
import Tab from '@src/components/common/Tab';
import { GetHomepageResponse } from '@src/lib/types/admin';
import handleTabKeyDown from '@src/views/MainPage/utils/handleTabKeyDown';
import FAQItem from './FAQItem';
import * as S from './style';

interface FAQSectionProps {
  faq: GetHomepageResponse['faq'];
}

export default function FAQSection({ faq }: FAQSectionProps) {
  const [category, setCategory] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const selectedCategory = faq.find((item) => item.category === category) ?? faq[0];

  if (!selectedCategory) return null;

  return (
    <S.Section aria-labelledby="faq-title">
      <Tab.Container
        selectedTab={selectedCategory.category}
        onSelect={(tab) => {
          setCategory(tab);
          setOpenIndex(0);
        }}
      >
        <S.Content>
          <S.Header>
            <S.Heading>
              <S.Title id="faq-title">FAQ</S.Title>
              <S.Subtitle>자주 묻는 질문</S.Subtitle>
            </S.Heading>
            <S.Tabs aria-label="FAQ 카테고리" onKeyDown={handleTabKeyDown}>
              {faq.map(({ category: tab }) => (
                <S.Tab key={tab} value={tab}>
                  {tab}
                </S.Tab>
              ))}
            </S.Tabs>
          </S.Header>

          {faq.map(({ category: tab, questions }) => (
            <S.List key={tab} tab={tab}>
              {questions.map(({ question, answer }, index) => (
                <FAQItem
                  key={question}
                  question={question}
                  answer={answer}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </S.List>
          ))}
        </S.Content>
      </Tab.Container>
    </S.Section>
  );
}
