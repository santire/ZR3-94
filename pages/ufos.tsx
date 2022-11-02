import { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { useNavStore } from '../components/store/store';

export default function HomePage() {
  const setVisited = useNavStore((state) => state.setVisited);

  useEffect(() => {
    setVisited('ufos');
    setVisited('documents');
  }, []);
  return (
    <>
      <Layout
        meta={{
          title: 'ZR3-94',
          description: '',
        }}
      >
        <h1>OVNIS</h1>
      </Layout>
    </>
  );
}
