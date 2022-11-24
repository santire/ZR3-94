import { Box, Grid, Text } from '@mantine/core';
import { useEffect } from 'react';
import anomalies from '../components/Anomaly/Anomalies';
import { Anomaly } from '../components/Anomaly/Anomaly';
import Layout from '../components/Layout/Layout';
import { SectionTitle } from '../components/SectionTitle/SectionTitle';
import { useNavStore } from '../components/store/store';
import { VideoPlayer } from '../components/VideoPlayer/VideoPlayer';

export default function Effects() {
  const setVisited = useNavStore((state) => state.setVisited);

  useEffect(() => {
    setVisited('effects');
    setVisited('ufos');
  }, []);

  return (
    <>
      <Layout
        meta={{
          title: 'ZR3-94',
          description: 'Efectos de las anomalías en la tierra',
        }}
      >
        <Box mt={100} mb={100}>
          <Box mb={100}>
            <SectionTitle title="EFECTOS EN LA TIERRA" />
          </Box>
          <Box>
            <Grid justify="center" gutter={40}>
              <Grid.Col span={4}>
                <Anomaly {...anomalies.fosa_de_las_marianas} inverted>
                  <Text size={18} align="justify" style={{ maxWidth: 338, margin: '0 auto' }}>
                    Su máxima profundidad llega a los 10.994 metros. Sin embargo, durante los
                    últimos años estas fosas se vieron alteradas por el agujero ZR3-94 y su punto de
                    máximo de profundidad es mucho mayor de lo que dicen los datos oficiales,
                  </Text>
                </Anomaly>
                <br />
                <Anomaly {...anomalies.cerro_uritorco} inverted>
                  <Text size={18} align="justify" style={{ maxWidth: 338, margin: '0 auto' }}>
                    Es un lugar turístico destacado por la “Huella del pajarito”. La misma fué
                    producida el 9 de enero de 1986 sobre una sierra y es un círculo perfecto. Ocho
                    años después, coincidiendo con la creación del ZR3-94, la huella comenzó a
                    desaparecer.
                  </Text>
                </Anomaly>
              </Grid.Col>
              <Grid.Col span={4}>
                <Anomaly {...anomalies.ojo_del_delta}>
                  <Text size={18} align="justify" style={{ maxWidth: 338, margin: '0 auto' }}>
                    Esta pequeña isla circular se mueve sola girando sobre su propio eje. Para
                    muchos de los lugareños se trata de un pedazo de vegetación que ha sido
                    desprendido hace 28 años pero la realidad es que el movimiento està influenciado
                    por el ZR3-94.
                  </Text>
                </Anomaly>
                <br />
                <Anomaly {...anomalies.rio_cetina}>
                  <Text size={18} align="justify" style={{ maxWidth: 338, margin: '0 auto' }}>
                    Mas conocido como "el Ojo de la Tierra" debido a su forma de ojo azul y
                    turquesa. Desde la existencia del agujero negro ZR3-94, se registran anomalías,
                    relacionadas al movimiento y a los tintes de las aguas, con las irregularidades
                    al sur de Africa.
                  </Text>
                </Anomaly>
              </Grid.Col>
              <Grid.Col span={4}>
                <Anomaly {...anomalies.desierto_de_atacama} inverted>
                  <Text size={18} align="justify" style={{ maxWidth: 338, margin: '0 auto' }}>
                    Se dice que fué generado por alguna excavación minera o el colpaso de túneles,
                    pero en realidad es el agujero ZR3-94 quien formò este socavón que sigue en
                    constante crecimeinto, debido a los viajes efectuados en las naves recuperadas.
                  </Text>
                </Anomaly>
                <br />
                <Anomaly {...anomalies.kimberly_big_hole} inverted>
                  <Text size={18} align="justify" style={{ maxWidth: 338, margin: '0 auto' }}>
                    Kimberley Big Hole es conocido como la excavación manual más grande del mundo.
                    El origen del agujero negro ZR3-94 y las anomalías registradas en el Río Cetina
                    expusieron una conexión energética entre el sur europeo y el sur africano.
                  </Text>
                </Anomaly>
              </Grid.Col>
            </Grid>
          </Box>

          <Box mt={100}>
            <SectionTitle title="REGISTRO DE SONIDOS" align="center" />
          </Box>

          <Box mt={100} mb={100}>
            <Grid gutter={20}>
              <Grid.Col span={2}>
                <VideoPlayer
                  linkTitle="SONIDO"
                  linkText="ZR3-94 EN FOSA DE LAS MARIANAS"
                  url="https://www.youtube.com/shorts/rDGK-mnRX3M"
                  width="100%"
                  height="192px"
                  controls={false}
                  style={{ padding: 0, margin: 0 }}
                  loop
                />
              </Grid.Col>
              <Grid.Col span={2}>
                <VideoPlayer
                  linkTitle="SONIDO"
                  linkText="ZR3-94 EN OJO DEL DELTA"
                  url="https://www.youtube.com/shorts/uNKPPPFU7MI"
                  width="100%"
                  height="192px"
                  controls={false}
                  style={{ padding: 0, margin: 0 }}
                  loop
                />
              </Grid.Col>
              <Grid.Col span={2}>
                <VideoPlayer
                  linkTitle="SONIDO"
                  linkText="ZR3-94 EN DESIERTO DE ATACAMA"
                  url="https://www.youtube.com/shorts/B85jwIVZVUQ"
                  width="100%"
                  height="192px"
                  controls={false}
                  style={{ padding: 0, margin: 0 }}
                  loop
                />
              </Grid.Col>
              <Grid.Col span={2}>
                <VideoPlayer
                  linkTitle="SONIDO"
                  linkText="ZR3-94 EN CERRO URITORCO"
                  url="https://www.youtube.com/shorts/nHgrTodYBdY"
                  width="100%"
                  height="192px"
                  controls={false}
                  style={{ padding: 0, margin: 0 }}
                  loop
                />
              </Grid.Col>
              <Grid.Col span={2}>
                <VideoPlayer
                  linkTitle="SONIDO"
                  linkText="ZR3-94 EN RÍO CETINA"
                  url="https://www.youtube.com/shorts/OTTcQ6AQgR0"
                  width="100%"
                  height="192px"
                  controls={false}
                  style={{ padding: 0, margin: 0 }}
                  loop
                />
              </Grid.Col>
              <Grid.Col span={2}>
                <VideoPlayer
                  linkTitle="SONIDO"
                  linkText="ZR3-94 EN KIMBERLY BIG HOLE"
                  url="https://www.youtube.com/shorts/YAg55iHUBTk"
                  width="100%"
                  height="192px"
                  controls={false}
                  style={{ padding: 0, margin: 0 }}
                  loop
                />
              </Grid.Col>
            </Grid>
          </Box>
        </Box>
      </Layout>
    </>
  );
}
