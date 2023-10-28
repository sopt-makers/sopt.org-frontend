import dynamic from 'next/dynamic';
import { SerializedStyles } from '@emotion/react';
import { Header, Layout } from '@src/components';

type PageLayoutOwnProps = {
  showScrollTopButton?: boolean;
  moreStyle?: SerializedStyles;
};

const DynamicFooter = dynamic(() => import('@src/components/Footer'));

const DynamicScrollToTopButton = dynamic(() => import('@src/components/common/ScrollToTopButton'));

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
