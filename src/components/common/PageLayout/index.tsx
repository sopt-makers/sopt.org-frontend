import dynamic from 'next/dynamic';
import { CSSProperties } from 'react';
import { Header, Layout } from '@src/components';

type PageLayoutOwnProps = {
  showScrollTopButton?: boolean;
  moreStyle?: CSSProperties;
};

const DynamicFooter = dynamic(() => import('@src/components/Footer').then((f) => f.Footer), {
  loading: () => <></>,
});

const DynamicScrollToTopButton = dynamic(
  () => import('@src/components/common/ScrollToTopButton').then((f) => f.ScrollToTopButton),
  {
    loading: () => <></>,
  },
);

export default function PageLayout({
  children,
  moreStyle,
  showScrollTopButton,
}: React.PropsWithChildren<PageLayoutOwnProps>) {
  return (
    <Layout moreStyle={moreStyle}>
      <Header />
      {showScrollTopButton && <DynamicScrollToTopButton />}
      {children}
      <DynamicFooter />
    </Layout>
  );
}
