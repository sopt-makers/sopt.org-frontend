import dynamic from 'next/dynamic';
import DummyDiv from '../common/DummyDiv';
import MakersNForm from './MakersNForm';

const DynamicOriginFooter = dynamic(() => import('./OriginFooter'), {
  loading: () => <DummyDiv height={980} />,
});

export default function Footer() {
  return (
    <>
      <DynamicOriginFooter />
      <MakersNForm />
    </>
  );
}
