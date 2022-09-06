import { Box, Center, Grid, Text, Image, Stack } from '@mantine/core';
import Layout from '../components/Layout/Layout';
import { SectionTitle } from '../components/SectionTitle/SectionTitle';

export default function HomePage() {
  return (
    <>
      <Layout meta={{
        title: "ZR3-94",
        description: "Página principal de los investigadores de anomalías trascendentales"
      }}>
        <Box mt={100} mb={100}>
          <Box mb={100}>
            <SectionTitle title="ZR3: AGUJERO NEGRO" />
          </Box>
          <Center><h1>Aca va la cosa esa que es un quilombo de hacer, despues lo encaro bien</h1></Center>
        </Box>
        <Box mt={100} mb={100}>
          <Box mb={100}>
            <SectionTitle title="EXPERIMENTACIÓN" />
          </Box>
          <Grid gutter={20}>
            <Grid.Col span={4}>
              <SectionTitle title="EXPERIMENTO BZ-1" fontSize={20} weight={400} />
              <Box ml={20} style={{ maxWidth: "95%" }}>
                <Text align="justify" size={20} mb='lg'>
                  Consistió en materializar la fuente de
                  combustible de naves extraterrestres
                  recuperadas y poder generar nuevos
                  saberes en función de lo humano.
                </Text>
                <Stack align="center">
                  <div style={{ maxWidth: 287, marginBottom: 20 }}>
                    <Image src="/assets/hassan_navas1.png" />
                    <Text size={16} weight={400} mt='md' align='justify' px='md'>
                      Creación del ZR3/94
                    </Text>
                  </div>
                  <div style={{ maxWidth: 287 }}>
                    <Image src="/assets/hassan_navas1.png" />
                    <Text size={16} weight={400} mt='md' align='justify' px='md'>
                      Hassan Navas (1948-1996), científico
                      e investigador que llevó a cabo el
                      experimento (junto a su equipo
                      identificado por las siglas E-115).
                    </Text>
                  </div>
                </Stack>
              </Box>
            </Grid.Col>
            <Grid.Col span={4}>
              <SectionTitle title="21 DE JUNIO DE 1994" fontSize={20} weight={400} />
              <Box ml={20} mb={50} style={{ maxWidth: "95%" }}>
                <Text align="justify" size={20} mb='lg'>
                  El 21 de junio de 1994 se originó el agujero ZR3-94 y el elemento 115 fue fundamental para que esto suceda, es la razón principal de una catástrofe científica ocurrida en Estados Unidos. Bajo efectos de radiación y el intento de descomposición atómica del elemento, una colisión de partículas generó una fusión con los diversos materiales de prueba, produciendo un colapso de la materia a nivel cuántico sobre un nivel de espacio infinitésimo, generando una fuente de masa gravitatoria posterior, una desestabilización subatómica que afectaría a los allí presentes.
                </Text>
              </Box>
              <SectionTitle title="EXPERIMENTO FALLIDO" fontSize={20} weight={400} />
              <Box ml={20} style={{ maxWidth: "95%" }}>
                <Text align="justify" size={20} mb='lg'>
                  Esta experimentación trajo el nacimiento de un agujero negro extraordinario y, a su vez, el fallecimiento de varios de los ciéntificos que la llevaron a cabo.
                  La falla producida fue analizada y se descubrió un rastro de radiación que provenía del área de pruebas y que se extendía (en grandes cantidades) en dirección contraria al suelo. Los análisis arrojaron que la extensión de radiación superaba las posibilidades terrestres, centrando su límite dentro de la galaxia Zeta Reticuli. Galaxia referente de la proveniencia de naves extraterrestres recuperadas en la tierra.
                </Text>
              </Box>
            </Grid.Col>
            <Grid.Col span={4}>
              <SectionTitle title="ELEMENTO 115" fontSize={20} weight={400} />
              <Box ml={20} style={{ maxWidth: "95%" }}>
                <Text align="justify" size={20} mb='lg'>
                  El elemento 115 es la fuente de energía utilizada por las naves para viajar a una velocidad indefinida por el espacio tiempo.
                </Text>
              </Box>
            </Grid.Col>
          </Grid>
        </Box>
      </Layout>
    </>
  );
}
