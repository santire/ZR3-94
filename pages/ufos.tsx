import { Box, Grid, Image, Text } from '@mantine/core';
import { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { SectionTitle } from '../components/SectionTitle/SectionTitle';
import { useNavStore } from '../components/store/store';
import { VideoPlayer } from '../components/VideoPlayer/VideoPlayer';

export default function Ufos() {
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
          description: 'ZR3-94 y Ovnis',
        }}
      >
        <Box mt={100} mb={100}>
          <Box mb={100}>
            <SectionTitle title="ZR94 y OVNIS" />
          </Box>
          <Grid gutter={20}>
            <Grid.Col span={4}>
              <SectionTitle title="ROBERT SCOTT LAZAR" fontSize={20} weight={400} />
              <Box ml={20} style={{ maxWidth: '95%' }}>
                <Text align="justify" size={20} mb="lg">
                  Mas conocido como “Bob Lazar”. Durante 1988 y 1989 trabajó en la base militar
                  secreta S-4 (Área 51), situada cerca de Groom Lake y es reconocido por declarar
                  publicamente el trabajo que realizaban allí.
                </Text>
              </Box>
              <br />
              <br />
              <SectionTitle title="ÁREA 51" fontSize={20} weight={400} />
              <Box ml={20} style={{ maxWidth: '95%' }}>
                <Text align="justify" size={20} mb="lg">
                  Es un destacamento remoto controlado por la Base Aérea de Edwards en el sur del
                  estado de Nevada. Aunque Groom Lake no se declaró como base secreta, las
                  investigaciones en torno al Área 51 son información clasificada como de alto
                  secreto de los Estados Unidos.
                </Text>
              </Box>
            </Grid.Col>
            <Grid.Col span={4}>
              <Image src="/assets/bob_lazar.png" ml={20} />
            </Grid.Col>
            <Grid.Col span={4}>
              <SectionTitle title="NAVES EXTRATERRESTRES" fontSize={20} weight={400} />
              <Box ml={20} style={{ maxWidth: '95%' }}>
                <Text align="justify" size={20} mb="lg">
                  El gobierno estadounidense buscaba reconstruir el funcionamiento de las naves
                  extraterrestres recuperadas y como resultado se originó el ZR3-94. Lazar declaró
                  que las naves estaban propulsadas por el elemento 115".
                </Text>
              </Box>
              <br />
              <br />
              <SectionTitle title="TEORÍAS SOBRE EL ELEMENTO 115" fontSize={20} weight={400} />
              <Box ml={20} style={{ maxWidth: '95%' }}>
                <Text align="justify" size={20} mb="lg">
                  Lazar afirma que el elemento 115 es la principal fuente de combustible para la
                  nave espacial extraterrestre, mientras ciéntificos Rusos sostenían que el elemento
                  115 se descompone en menos de un segundo, lo que lo hace incapaz de ser utilizado.
                </Text>
              </Box>
            </Grid.Col>
          </Grid>
          <Image src="/assets/nave_recuperada.png" ml={20} my={100} />
          <Grid gutter={20}>
            <Grid.Col span={4} pt="lg">
              <SectionTitle title="COMUNICADO OFICIAL DEL I.A.T" fontSize={20} weight={400} />
              <Box ml={20} style={{ maxWidth: '95%' }}>
                <Text align="justify" size={20} mb="lg">
                  Se confirmó la utilización consistente por parte de EE.UU del elemento 115. El
                  país creador del ZR3-94, estableció su base espacial B26-6 en el mismo por medio
                  de las naves recuperadas no pertenecientes a la raza humana, permitiendo obtener
                  un destino programado, explorable y seguro.
                </Text>
              </Box>
              <br />
              <br />
              <SectionTitle title="DESTINO ZR3-94" fontSize={20} weight={400} />
              <Box ml={20} style={{ maxWidth: '95%' }}>
                <Text align="justify" size={20} mb="lg">
                  Funciona como punto de partida a nuevos horizontes a lo largo de las galaxias,
                  accediendo a grandes avances tecnologicos con la ayuda alienígena y a la
                  posibilidad de utilizar al estas capacidades tecnológicas.
                </Text>
              </Box>
            </Grid.Col>
            <Grid.Col span={4}>
              <SectionTitle
                title="BASE ESPACIAL B26-6"
                fontSize={24}
                weight={400}
                align="center"
                noLine
              />
              <br />
              <Image src="/assets/base_espacial.png" ml={20} />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Text align="justify" color="#6D59C9" mt="md">
                  Ubicación:20.1863, 32.8704 G-ZR.
                  <br />
                  Tamaño: X metros cuadrados.
                  <br />
                  Fecha de creación: 20 de junio 2007
                </Text>
              </div>
            </Grid.Col>
            <Grid.Col span={4} pt="lg">
              <SectionTitle title="AGUJEROS DE GUSANOS" fontSize={20} weight={400} />
              <Box ml={20} style={{ maxWidth: '95%' }}>
                <Text align="justify" size={20} mb="lg">
                  Las grandes creencias mencionan que la absorción hacia el interior de un agujero
                  negro culmina con la materia y nada puede ser expulsado, pero se a concluido en
                  una nueva posibilidad por medio de agujeros de gusanos ubicados en el interior del
                  horizonte de sucesos y propios del ZR3-94.
                </Text>
              </Box>
              <br />
              <br />
              <SectionTitle title="AGUJEROS BLANCOS" fontSize={20} weight={400} />
              <Box ml={20} style={{ maxWidth: '95%' }}>
                <Text align="justify" size={20} mb="lg">
                  Los agujeros de gusanos funcionan como conexión entre la entrada y la salida del
                  horizonte de sucesos, denominandose “Agujero Blanco” y contando con la posibilidad
                  de la extinsión del mismo al entrar.
                </Text>
              </Box>
            </Grid.Col>
          </Grid>
          <Box mt={100} mb={60}>
            <SectionTitle title="REGISTRO DE OVNIS" />
          </Box>
          <Box ml={20}>
            <Grid gutter={20}>
              <Grid.Col span={4}>
                <VideoPlayer
                  linkText="ISLA DEL DELTA"
                  linkTitle="VER REGISTRO"
                  url="https://www.youtube.com/watch?v=d37cxGp4vug"
                  width="100%"
                  height="226px"
                  controls={false}
                  style={{ padding: 0, margin: 0 }}
                />
                <br />
                <VideoPlayer
                  linkText="DESIERTO DE ATACAMA"
                  linkTitle="VER REGISTRO"
                  url="https://www.youtube.com/watch?v=IQLJTzvawf4"
                  width="100%"
                  height="226px"
                  controls={false}
                  style={{ padding: 0, margin: 0 }}
                />
              </Grid.Col>
              <Grid.Col span={4}>
                <VideoPlayer
                  linkText="CERRRO URITORCO"
                  linkTitle="VER REGISTRO"
                  url="https://www.youtube.com/watch?v=97QIq-bmJ9s"
                  width="100%"
                  height="226px"
                  controls={false}
                  style={{ padding: 0, margin: 0 }}
                />
                <br />
                <VideoPlayer
                  linkText="KIMBERLY BIG HOLE"
                  linkTitle="VER REGISTRO"
                  url="https://www.youtube.com/watch?v=YOrFK_6GDP4"
                  width="100%"
                  height="226px"
                  controls={false}
                  style={{ padding: 0, margin: 0 }}
                />
              </Grid.Col>
              <Grid.Col span={4}>
                <VideoPlayer
                  linkText="FOSA DE LAS MARIANAS"
                  linkTitle="VER REGISTRO"
                  url="https://www.youtube.com/watch?v=yFna3h5m5W4"
                  width="100%"
                  height="226px"
                  controls={false}
                  style={{ padding: 0, margin: 0 }}
                />
                <br />
                <VideoPlayer
                  linkText="RIO CETINA"
                  linkTitle="VER REGISTRO"
                  url="https://www.youtube.com/watch?v=CPt2AlZ9jXI"
                  width="100%"
                  height="226px"
                  controls={false}
                  style={{ padding: 0, margin: 0 }}
                />
              </Grid.Col>
            </Grid>
          </Box>
        </Box>
      </Layout>
    </>
  );
}
