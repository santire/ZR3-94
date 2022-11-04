import { Box, Grid, Text, Image, Stack, createStyles } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useEffect } from 'react';
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

  useEffect(() => {
    setVisited('home');
    setVisited('effects');
  }, []);

  return (
    <>
      <Layout
        meta={{
          title: 'ZR3-94',
          description: 'Página principal de los investigadores de anomalías trascendentales',
        }}
      >
        <Box mt={100} mb={100}>
          <Box mb={100}>
            <SectionTitle title="ZR3: AGUJERO NEGRO" />
          </Box>
          <Image src="/assets/zr3_agujero_negro.png" ml={20} />
        </Box>
        <Box mt={100} mb={100}>
          <Box mb={100}>
            <SectionTitle title="EXPERIMENTACIÓN" />
          </Box>
          <Grid gutter={20}>
            <Grid.Col span={4}>
              <SectionTitle title="EXPERIMENTO BZ-1" fontSize={20} weight={400} />
              <Box ml={20} style={{ maxWidth: '95%' }}>
                <Text align="justify" size={20} mb="lg">
                  Consistió en materializar la fuente de combustible de naves extraterrestres
                  recuperadas y poder generar nuevos saberes en función de lo humano.
                </Text>
                <Stack align="center">
                  <div style={{ maxWidth: 287, marginBottom: 20 }}>
                    <Image src="/assets/zeta_reticuli_6.png" />
                    <Text size={16} weight={400} mt="md" align="justify" px="md">
                      Galaxia Zeta Reticuli
                    </Text>
                  </div>
                  <div style={{ maxWidth: 287 }}>
                    <Image src="/assets/hassan_navas1.png" />
                    <Text size={16} weight={400} mt="md" align="justify" px="md">
                      Hassan Navas (1948-1996), científico e investigador que llevó a cabo el
                      experimento (junto a su equipo identificado por las siglas E-115).
                    </Text>
                  </div>
                </Stack>
              </Box>
            </Grid.Col>
            <Grid.Col span={4}>
              <SectionTitle title="21 DE JUNIO DE 1994" fontSize={20} weight={400} />
              <Box ml={20} mb={50} style={{ maxWidth: '95%' }}>
                <Text align="justify" size={20} mb="lg">
                  El 21 de junio de 1994 se originó el agujero ZR3-94 y el elemento 115 fue
                  fundamental para que esto suceda, es la razón principal de una catástrofe
                  científica ocurrida en Estados Unidos. Bajo efectos de radiación y el intento de
                  descomposición atómica del elemento, una colisión de partículas generó una fusión
                  con los diversos materiales de prueba, produciendo un colapso de la materia a
                  nivel cuántico sobre un nivel de espacio infinitésimo, generando una fuente de
                  masa gravitatoria posterior, una desestabilización subatómica que afectaría a los
                  allí presentes.
                </Text>
              </Box>
              <SectionTitle title="EXPERIMENTO FALLIDO" fontSize={20} weight={400} />
              <Box ml={20} style={{ maxWidth: '95%' }}>
                <Text align="justify" size={20} mb="lg">
                  Esta experimentación trajo el nacimiento de un agujero negro extraordinario y, a
                  su vez, el fallecimiento de varios de los ciéntificos que la llevaron a cabo. La
                  falla producida fue analizada y se descubrió un rastro de radiación que provenía
                  del área de pruebas y que se extendía (en grandes cantidades) en dirección
                  contraria al suelo. Los análisis arrojaron que la extensión de radiación superaba
                  las posibilidades terrestres, centrando su límite dentro de la galaxia Zeta
                  Reticuli. Galaxia referente de la proveniencia de naves extraterrestres
                  recuperadas en la tierra.
                </Text>
              </Box>
            </Grid.Col>
            <Grid.Col span={4}>
              <SectionTitle title="ELEMENTO 115" fontSize={20} weight={400} />
              <Box ml={20} style={{ maxWidth: '95%' }}>
                <Text align="justify" size={20} mb="lg">
                  El elemento 115 es la fuente de energía utilizada por las naves para viajar a una
                  velocidad indefinida por el espacio tiempo.
                </Text>
                <Stack align="center">
                  <div style={{ maxWidth: 287, marginBottom: 20 }}>
                    <Image src="/assets/elemento_115_2.png" />
                    <Text size={16} weight={400} mt="md" align="justify" px="md">
                      Elemento 115
                    </Text>
                  </div>
                  <div style={{ maxWidth: 287 }}>
                    <Image src="/assets/distancia_zr394.png" />
                    <Text size={16} weight={400} mt="md" align="justify" px="md">
                      La luz viaja en línea recta y se refleja cuando colisiona con superficies
                      reflectantes y al pasar de un medio a otro, cambia de velocidad y se desvía,
                      se refracta
                    </Text>
                  </div>
                </Stack>
              </Box>
            </Grid.Col>
          </Grid>
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
            <SectionTitle title="EQUIPO DE INVESTIGACIÓN E-115" fontSize={24} weight={500} />
          </Box>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              /* alignItems: 'center', */
              /* maxWidth: 1280, */
              maxWidth: 820,
              margin: '0 auto 4em auto',
            }}
          >
            {Object.values(investigators)
              .slice(0, 4)
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
              .slice(4)
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
