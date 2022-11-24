import { Box, Grid, Text, Image, createStyles, Modal, Paper, HoverCard } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import { Person } from '../components/Person/Person';
import { SectionTitle } from '../components/SectionTitle/SectionTitle';
import investigators from '../components/Person/Investigators';
import { VideoPlayer } from '../components/VideoPlayer/VideoPlayer';
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

export default function HomePage() {
  const { classes } = useStyles();
  const setVisited = useNavStore((state) => state.setVisited);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setVisited('home');
    setVisited('effects');
  }, []);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        withCloseButton={false}
        centered
        padding={0}
      >
        <Paper shadow="xs" radius="lg" p="lg" style={{ background: '#E8E8E8' }}>
          <Text size="sm" color="black">
            El 21 de junio de 1994 se originó el agujero ZR3-94 y el elemento 115 fue fundamental
            para que esto suceda, es la razón principal de una catástrofe científica ocurrida en
            Estados Unidos. Bajo efectos de radiación y el intento de descomposición atómica del
            elemento, una colisión de partículas generó una fusión con los diversos materiales de
            prueba, produciendo un colapso de la materia a nivel cuántico sobre un nivel de espacio
            infinitésimo, generando una fuente de masa gravitatoria posterior, una desestabilización
            subatómica que afectaría a los allí presentes.
          </Text>
        </Paper>
      </Modal>
      <Layout
        meta={{
          title: '¿QUÉ ES EL ZR3-94?',
          description: 'Página principal de los investigadores de anomalías trascendentales',
        }}
      >
        <Box mt={100} mb={100}>
          <Box mb={100}>
            <SectionTitle title="¿QUÉ ES EL ZR3-94?" />
          </Box>
          <div style={{ position: 'relative' }}>
            <Image src="/assets/zr3_agujero_negro.png" ml={20} />
            <div
              style={{
                width: "33%",
                height: "90%",
                position: 'absolute',
                left: "32.5%",
                bottom: "11%",
              }}
              onClick={() => setOpened(true)}
            />
          </div>
        </Box>
        <Box mt={100} mb={100}>
          <Grid gutter={20}>
            <Grid.Col span={4}>
              <VideoPlayer
                linkText="SIMULACIÓN CREACIÓN ZR3-94"
                url="https://www.youtube.com/watch?v=X00hyZNzziw"
                width="100%"
                height="234px"
                controls={false}
                style={{ padding: 0, margin: 0 }}
                loop
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <VideoPlayer
                linkText="ELEMENTO 115 (THERMAL/X-RAY)"
                url="https://www.youtube.com/watch?v=fXeSXYfc098"
                width="100%"
                height="234px"
                controls={false}
                style={{ padding: 0, margin: 0 }}
                loop
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <VideoPlayer
                linkText="REACTOR DS-3"
                url="https://www.youtube.com/watch?v=FJhGVMX3ALo"
                width="100%"
                height="234px"
                controls={false}
                style={{ padding: 0, margin: 0 }}
                loop
              />
            </Grid.Col>
          </Grid>
          <Box
            mt={100}
            mb={100}
            style={{ background: 'rgba(255,255,255, 0.05)', borderRadius: 50 }}
          >
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
                    src={`/assets/small_blueprints/${(i % 6) + 1}.png`}
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

          <Box mt={100} mb={100}>
            <Image src="/assets/blueprint.png" ml={20} />
          </Box>
        </Box>
        <Box mt={100} mb={100}>
          <Box mb={100}>
            <SectionTitle title="EXPERIMENTO BZ-1" fontSize={24} weight={500} align="center" />

            <Box ml={20} style={{ maxWidth: '95%' }}>
              <Text align="justify" size={20} mb="lg" ml={20}>
                El experimento BZ-1 consistió en materializar la fuente de combustible de naves
                extraterrestres recuperadas y poder generar nuevos saberes en función de lo humano.
                Fué llevada a cabo por el científico e investigador Hassan Navas (1948-1996) y su
                equipo identificado por las siglas E-115. <br />
                Esta experimentación trajo el nacimiento del extraordinario agujero negro ZR3-94 y,
                a su vez, el fallecimiento de varios de los ciéntificos involucrados La falla
                producida fue analizada y se descubrió un rastro de radiación que provenía del área
                de pruebas y que se extendía (en grandes cantidades) en dirección contraria al
                suelo. Los análisis arrojaron que la extensión de radiación superaba las
                posibilidades terrestres, centrando su límite dentro de la galaxia Zeta Reticuli.
                Galaxia referente de la proveniencia de naves extraterrestres recuperadas en la
                tierra.
              </Text>
            </Box>
          </Box>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              maxWidth: 1025,
              margin: '0 auto 3em auto',
              border: '1px solid pink',
            }}
          >
            {Object.values(investigators)
              .slice(0, 5)
              .map((i) => (
                <Box key={i.name}>
                  <Person {...i} />
                </Box>
              ))}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              maxWidth: 1025,
              margin: '0 auto 4em auto',
            }}
          >
            {Object.values(investigators)
              .slice(5)
              .map((i) => (
                <Box key={i.name}>
                  <Person {...i} />
                </Box>
              ))}
          </div>
        </Box>
      </Layout>
    </>
  );
}
