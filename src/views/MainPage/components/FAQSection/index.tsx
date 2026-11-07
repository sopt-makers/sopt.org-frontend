import { useState } from 'react';
import { GetHomepageResponse } from '@src/lib/types/admin';
import FAQItem from './FAQItem';
import Tab from './Tab';
import * as S from './style';

export default function FAQSection({ faq }: { faq: GetHomepageResponse['faq'] }) {
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
        <S.Header>
          <S.Heading>
            <S.Title id="faq-title">FAQ</S.Title>
            <S.Subtitle>자주 묻는 질문</S.Subtitle>
          </S.Heading>
          <Tab.List>
            {faq.map(({ category: tab }) => (
              <Tab.Item key={tab} value={tab} />
            ))}
          </Tab.List>
        </S.Header>

        {faq.map(({ category: tab, questions }) => (
          <Tab.Panel key={tab} tab={tab}>
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
          </Tab.Panel>
        ))}
      </Tab.Container>
    </S.Section>
  );
}
