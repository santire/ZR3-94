import { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { useNavStore } from '../components/store/store';

export default function HomePage() {
  const setVisited = useNavStore((state) => state.setVisited);

  useEffect(() => {
    setVisited('documents');
    setVisited('testimonials');
  }, []);
  return (
    <>
      <Layout
        meta={{
          title: 'ZR3-94',
          description: 'Documentos de anomalías trascendentales',
        }}
      >
        <h1>Documentos</h1>
      </Layout>
    </>
  );
}
