import { Box, Grid, Image, List, Text } from '@mantine/core';
import { IconMapPin } from '@tabler/icons';
import Layout from '../components/Layout/Layout';
import { Anomaly } from '../components/Anomaly/Anomaly';
import { SectionTitle } from '../components/SectionTitle/SectionTitle';
import anomalies from '../components/Anomaly/Anomalies';

export default function HomePage() {
  const places = [
    { name: 'ISLA DEL DELTA', country: 'Argentina' },
    { name: 'FOSA DE LAS MARIANAS', country: 'Océano Pacífico' },
    { name: 'DESIERTO DE ATACAMA', country: 'Chile' },
    { name: 'CERRO URITORCO', country: 'Argentina' },
    { name: 'RÍO CETINA', country: 'Croacia' },
    { name: 'KIMBERLEY BIG HOLE', country: 'Sudáfrica' },
  ];
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
                <Text size={18} align="justify" style={{ maxWidth: 338, margin: '0 auto' }}>
                  Se comenzaron a notar anomalías en centros específicos de la tierra: se observan
                  varios flujos de energía ajenos, distorsiones gravitacionales y apariencias de
                  figuras extrañas.
                  <br />
                  <br />
                  El ZR3 tiene dos características que lo diferencian de los otros agujeros negros y
                  son las causantes de estos efectos en la tierra:
                  <ol>
                    <li>
                      La materia puede ingresar en él y no ser destruída lo que ingresa se conserva
                      o se transforma).
                    </li>
                    <li>Todo aquello que se introduce al agujero puede salir de éste.</li>
                  </ol>
                </Text>
              </Grid.Col>
              <Grid.Col span={4}>
                <Image width={387} src="/assets/effects_img.png" />
              </Grid.Col>
              <Grid.Col span={4}>
                <Text size={20} mb="md" ml={75}>
                  LUGARES AFECTADOS
                </Text>
                <List ml={30} center spacing="md" icon={<IconMapPin size={35} stroke="1px" />}>
                  {places.map((p) => (
                    <List.Item key={p.name} style={{ maxWidth: 350 }}>
                      <Text size={20}>
                        {p.name} ({p.country})
                      </Text>
                    </List.Item>
                  ))}
                </List>
              </Grid.Col>
            </Grid>
          </Box>
        </Box>
        <Box mt={100} mb={100}>
          <Box mb={100}>
            <SectionTitle title="LUGARES AFECTADOS" />
          </Box>
          <Box>
            <Grid justify="center" gutter={40}>
              <Grid.Col span={4}>
                <Anomaly {...anomalies.fosa_de_las_marianas}>
                  <Text size={18} align="justify" style={{ maxWidth: 338, margin: '0 auto' }}>
                    Es una depresión del fondo marino que se encuentra en el océano Pacífico
                    occidental y es el área más honda de los océanos terrestres. Su máxima
                    profundidad llega a los 10.994 metros. Sin embargo, durante los últimos años
                    estas fosas se vieron alteradas por el ZR3-94 y su punto de mayor profundidad es
                    aún más acentuado de lo que se dice, llegando éste a los 11.482 metros.
                  </Text>
                </Anomaly>
                <h1>anomalia4</h1>
              </Grid.Col>
              <Grid.Col span={4}>
                <h1>anomalia2</h1>
                <h1>anomalia5</h1>
              </Grid.Col>
              <Grid.Col span={4}>
                <h1>anomalia3</h1>
                <h1>anomalia6</h1>
              </Grid.Col>
            </Grid>
          </Box>
        </Box>
      </Layout>
    </>
  );
}
