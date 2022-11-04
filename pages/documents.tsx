import { Carousel } from '@mantine/carousel';
import { Box, createStyles, Grid, Image, Text } from '@mantine/core';
import { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { SectionTitle } from '../components/SectionTitle/SectionTitle';
import { useNavStore } from '../components/store/store';

const useStyles = createStyles((_theme, _params, getRef) => ({
  controls: {
    ref: getRef('controls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  root: {
    '&:hover': {
      [`& .${getRef('controls')}`]: {
        opacity: 1,
      },
    },
  },
}));
export default function Documents() {
  const setVisited = useNavStore((state) => state.setVisited);
  const { classes } = useStyles();

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
        <Box mt={100} mb={100}>
          <Box mb={100}>
            <SectionTitle title="ZR94 y OVNIS" />
          </Box>
          <Grid gutter={20} align="center" justify="center">
            <Grid.Col span={4}>
              <SectionTitle title="INÉS MARÍA LAFUENTE" fontSize={20} weight={400} />
              <Box ml={20} style={{ maxWidth: '95%' }}>
                <Text align="justify" size={20} mb="lg">
                  El caso de es analogo al de Bob Lazar, teniendo la diferencia de la ciéntifica e
                  investigadora Lafuente no utilizó la exposición pública como resguardo de su
                  identidad. A día de hoy su ubicación es desconocida y sus datos han sido
                  eliminados por los gobiernos de todos los registros existentes.
                </Text>
              </Box>
            </Grid.Col>
            <Grid.Col span={4}>
              <Image src="/assets/ines_maria_lafuente.png" ml={20} />
            </Grid.Col>
            <Grid.Col span={4}>
              <SectionTitle title="LIBRO NO IDENTIFICADO" fontSize={20} weight={400} />
              <Box ml={20} style={{ maxWidth: '95%' }}>
                <Text align="justify" size={20} mb="lg">
                  Inés María Lafuente fue partícipe de varios trabajos vinculados (de manera
                  indirecta) al desarrollo de tecnología del ZR3-94. Su libro personal de
                  anotaciones, es el mayor registro de investigación propio de una científica
                  involucrada en la manipulación del extraordinario agujero ZR3-94.
                </Text>
              </Box>
            </Grid.Col>
          </Grid>
          <Image src="/assets/documents_img.png" ml={20} p={0} />
        </Box>
        <Box my={80} ml={20}>
          <Text size={20} align="justify">
            Durante todos estos años, Investigadores de Anomalías Trascendentales fue clasificando
            los diferentes hallazgos por medio de documentos ocultos, principalmente de Estados
            Unidos. Los origenes de experimentos, desplazamientos a la velocidad de la luz, contacto
            con nuevas civilizaciones y más, han sido documentados y resguardados pero es nuestro
            trabajo trasladar a las personas interesadas toda esta información.
          </Text>
        </Box>
        <Box mt={100} mb={100} style={{ background: 'rgba(255,255,255, 0.05)', borderRadius: 50 }}>
          <Carousel
            height="100%"
            slideSize="16.66666666%"
            slideGap="sm"
            slidesToScroll={1}
            align="start"
            loop
            classNames={classes}
          >
            {Array.from(Array(3 * 6).keys()).map((i) => (
              <Carousel.Slide p="xl" key={(i % 6) + 1}>
                <Image
                  src={`/assets/documents/${(i % 6) + 1}.png`}
                  width={128}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Box>
        <Box style={{ maxWidth: '70%', margin: '0 auto' }}>
          <Image src="/assets/documents_img2.png" ml={20} mb={100} />
        </Box>
      </Layout>
    </>
  );
}
