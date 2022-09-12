import { Box, Grid, Image, List, Text } from '@mantine/core';
import { IconMapPin } from '@tabler/icons';
import Layout from '../components/Layout/Layout';
import { SectionTitle } from '../components/SectionTitle/SectionTitle';

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
      </Layout>
    </>
  );
}
