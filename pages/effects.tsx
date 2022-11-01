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
                <Anomaly {...anomalies.fosa_de_las_marianas} inverted>
                  <Text size={18} align="justify" style={{ maxWidth: 338, margin: '0 auto' }}>
                    Es una depresión del fondo marino que se encuentra en el océano Pacífico
                    occidental y es el área más honda de los océanos terrestres. Su máxima
                    profundidad llega a los 10.994 metros. Sin embargo, durante los últimos años
                    estas fosas se vieron alteradas por el ZR3-94 y su punto de mayor profundidad es
                    aún más acentuado de lo que se dice, llegando éste a los 11.482 metros.
                  </Text>
                </Anomaly>
                <br />
                <Anomaly {...anomalies.cerro_uritorco} inverted>
                  <Text size={18} align="justify" style={{ maxWidth: 338, margin: '0 auto' }}>
                    Es un lugar turístico y de gran atracción por la cantidad de presencias OVNIS
                    registradas. En diferentes espacios se observan extraños despliegues “naturales”
                    de formas circulares. La famosa “Huella del pajarito” fue producida el 9 de
                    enero de 1986 sobre una sierra y es un círculo perfecto. Ocho años después,
                    coincidiendo con la creación del ZR3-94, la huella comenzó a desaparecer.
                  </Text>
                </Anomaly>
              </Grid.Col>
              <Grid.Col span={4}>
                <Anomaly {...anomalies.ojo_del_delta}>
                  <Text size={18} align="justify" style={{ maxWidth: 338, margin: '0 auto' }}>
                    Es una pequeña isla circular (de 118 metros de diámetro) que se mueve sola
                    girando sobre su propio eje. Para muchos de los lugareños se trata de un pedazo
                    de vegetación que ha sido desprendido hace 28 años. Sin embargo la gran
                    influencia del ZR3-94 fue vinculada con éxito luego de diversos lineamientos que
                    develaban una gran concentración gravitacional en la zona.
                  </Text>
                </Anomaly>
                <br />
                <Anomaly {...anomalies.rio_cetina}>
                  <Text size={18} align="justify" style={{ maxWidth: 338, margin: '0 auto' }}>
                    Se ha convertido en uno de los principales sitios turísticos del país, mas
                    conocido como "el Ojo de la Tierra" debido a su forma de ojo azul y turquesa. Su
                    longitud total es de 105 km y es considerado como la fuente de agua mas limpia y
                    abudante de Croacia. Desde la existencia del ZR3-94, se registran anomalías,
                    relacionadas al movimiento y a los tintes de las aguas, con las irregularidades
                    al sur de Africa.
                  </Text>
                </Anomaly>
              </Grid.Col>
              <Grid.Col span={4}>
                <Anomaly {...anomalies.desierto_de_atacama} inverted>
                  <Text size={18} align="justify" style={{ maxWidth: 338, margin: '0 auto' }}>
                    Se trata de un socavón de 64 metros de profundidad y 32 de diámetro, la
                    población más cercana se ubica a 600 metros y afirma que sigue activo y en
                    crecimiento. Se dice que se formó por alguna excavación minera o por el colpaso
                    de túneles, pero la realidad es que el ZR3-94 es quien afecta la tierra chilena
                    debido a los viajes efectuados en las naves recuperadas.
                  </Text>
                </Anomaly>
                <br />
                <Anomaly {...anomalies.kimberly_big_hole} inverted>
                  <Text size={18} align="justify" style={{ maxWidth: 338, margin: '0 auto' }}>
                    Hace 150 años, el Big Hole era una colina sin características. Hoy en día se lo
                    conoce como la excavación manual más grande del mundo, la cual fue llevada acabo
                    desde 1871 hasta 1914. El origen del ZR3-94 y las anomalías registradas al sur
                    de Europa (Río Cetina) expusieron nuevas relaciones entre ambos espacios,
                    mencionando una conexión energética de miles de kilómetros.
                  </Text>
                </Anomaly>
              </Grid.Col>
            </Grid>
          </Box>
        </Box>
      </Layout>
    </>
  );
}
