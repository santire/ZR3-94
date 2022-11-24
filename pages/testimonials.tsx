import { Box, Image, Text } from '@mantine/core';
import { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { SectionTitle } from '../components/SectionTitle/SectionTitle';
import { useNavStore } from '../components/store/store';
import { VideoPlayer } from '../components/VideoPlayer/VideoPlayer';

export default function Testimonials() {
  const setVisited = useNavStore((state) => state.setVisited);

  useEffect(() => {
    setVisited('testimonials');
    setVisited('access');
  }, []);
  return (
    <>
      <Layout
        meta={{
          title: 'ZR3-94',
          description: 'Testimonio',
        }}
      >
        <Box mt={100} mb={100}>
          <Box mb={60}>
            <SectionTitle title="TESTIMONIO" />
          </Box>

          <Box ml={20} mb={60} style={{ maxWidth: '92%', margin: '0 auto' }}>
            <Text align="justify" size={20}>
              El siguiente testimonio fue grabado con el consenso del propio entrevistado,
              resguardado y supervisado por la I.A.T. Por pedido propio, el protagonista pidió ser
              llamado como Neil en la entrevista, en honor al primer hombre en pisar suelo lunar.
              Neil, partícipe de exploraciones al interior del ZR3-94, comentará grandes detalles y
              hallazgos clasificados sobre estos viajes impensado por la humanidad.
            </Text>
          </Box>
          <Box ml={20} my={60}>
            <VideoPlayer
              linkText="NEIL"
              linkTitle="VER TESTIMONIO"
              url="https://www.youtube.com/watch?v=PcfO1t7xAPo"
              width="100%"
              height="604px"
              controls={false}
              style={{ padding: 0, margin: 0 }}
              muted
            />
          </Box>
          <Box>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                maxWidth: '85%',
                margin: '0 auto',
              }}
            >
              <Image src="/assets/testimonials/1.png" />
              <Image src="/assets/testimonials/2.png" />
              <Image src="/assets/testimonials/3.png" />
            </div>
          </Box>
        </Box>
      </Layout>
    </>
  );
}
