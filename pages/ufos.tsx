import { Box, Center, Grid, HoverCard, Image, Paper, Text } from '@mantine/core';
import { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { SectionTitle } from '../components/SectionTitle/SectionTitle';
import { useNavStore } from '../components/store/store';
import { VideoPlayer } from '../components/VideoPlayer/VideoPlayer';

interface PopupProps {
  title: string;
  content: string;
  imgSrc: string;
}

export default function Ufos() {
  const setVisited = useNavStore((state) => state.setVisited);

  useEffect(() => {
    setVisited('ufos');
    setVisited('documents');
  }, []);

  const popups: PopupProps[] = [
    {
      title: 'ELEMENTO 115',
      content:
        'El elemento 115 es la fuente de energía utilizada por las naves para viajar a una velocidad indefinida por el espacio tiempo.',
      imgSrc: '/assets/elemento_115_2.png',
    },
    {
      title: 'BASE ESPACIAL B26-6',
      content:
        'Ubicación:20.1863, 32.8704 G-ZR.\nTamaño: X metros cuadrados.\nFecha de creación: 20 de junio 2007',
      imgSrc: '/assets/base_espacial.png',
    },
  ];

  const PopupComponent = ({ title, content, imgSrc }: PopupProps) => (
    <div>
      <Paper shadow="xs" radius="lg" p="md" style={{ background: '#E8E8E8' }}>
        <Text size={17} color="black">
          {title}
        </Text>
        <Text size={17} color="black" p="xs" align="justify">
          {content.split('\n').map((line) => (
            <div key={line}>
              {line}
              <br />
            </div>
          ))}
        </Text>

        <Center>
          <Image src={imgSrc} />
        </Center>
      </Paper>
    </div>
  );
  return (
    <>
      <Layout
        meta={{
          title: 'ZR3-94',
          description: 'ZR3-94 y Ovnis',
        }}
      >
        <Box mt={100} mb={100}>
          <Box mb={60}>
            <SectionTitle title="ZR94 y OVNIS" />
          </Box>
          <Box ml={20} mb={60} style={{ maxWidth: '92%', margin: '0 auto' }}>
            <Text align="justify" size={20}>
              Se confirmó la utilización consistente por parte de EE.UU del{' '}
              <HoverCard width={400} position="bottom-start">
                <HoverCard.Target>
                  <span style={{ color: '#C800FA' }}>elemento 115</span>
                </HoverCard.Target>
                <HoverCard.Dropdown style={{ background: 'none', border: 0 }}>
                  <PopupComponent {...popups[0]} />
                </HoverCard.Dropdown>
              </HoverCard>
              . Estados Unidos estableció su base espacial{' '}
              <HoverCard width={400} position="bottom-start">
                <HoverCard.Target>
                  <span style={{ color: '#69BAC6' }}>B26-6</span>
                </HoverCard.Target>
                <HoverCard.Dropdown style={{ background: 'none', border: 0 }}>
                  <PopupComponent {...popups[1]} />
                </HoverCard.Dropdown>
              </HoverCard>{' '}
              en el mismo por medio de las naves recuperadas no pertenecientes a la raza humana,
              permitiendo obtener un destino programado, explorable y seguro. El destino ZR3-94
              funciona como punto de partida a nuevos horizontes a lo largo de las galaxias,
              accediendo a grandes avances tecnologicos con la ayuda alienígena y a la posibilidad
              de utilizar al estas capacidades tecnológicas.
            </Text>
          </Box>

          <Image src="/assets/nave_recuperada.png" ml={20} my={100} />
          <Box ml={20}>
            <Grid gutter={20}>
              <Grid.Col span={4}>
                <VideoPlayer
                  linkText="ISLA DEL DELTA"
                  linkTitle="VER REGISTRO"
                  url="https://www.youtube.com/watch?v=d37cxGp4vug"
                  width="100%"
                  height="234px"
                  controls={false}
                  style={{ padding: 0, margin: 0 }}
                  loop
                />
                <br />
                <VideoPlayer
                  linkText="DESIERTO DE ATACAMA"
                  linkTitle="VER REGISTRO"
                  url="https://www.youtube.com/watch?v=IQLJTzvawf4"
                  width="100%"
                  height="234px"
                  controls={false}
                  style={{ padding: 0, margin: 0 }}
                  loop
                />
              </Grid.Col>
              <Grid.Col span={4}>
                <VideoPlayer
                  linkText="CERRRO URITORCO"
                  linkTitle="VER REGISTRO"
                  url="https://www.youtube.com/watch?v=97QIq-bmJ9s"
                  width="100%"
                  height="234px"
                  controls={false}
                  style={{ padding: 0, margin: 0 }}
                  loop
                />
                <br />
                <VideoPlayer
                  linkText="KIMBERLY BIG HOLE"
                  linkTitle="VER REGISTRO"
                  url="https://www.youtube.com/watch?v=YOrFK_6GDP4"
                  width="100%"
                  height="234px"
                  controls={false}
                  style={{ padding: 0, margin: 0 }}
                  loop
                />
              </Grid.Col>
              <Grid.Col span={4}>
                <VideoPlayer
                  linkText="FOSA DE LAS MARIANAS"
                  linkTitle="VER REGISTRO"
                  url="https://www.youtube.com/watch?v=yFna3h5m5W4"
                  width="100%"
                  height="234px"
                  controls={false}
                  style={{ padding: 0, margin: 0 }}
                  loop
                />
                <br />
                <VideoPlayer
                  linkText="RIO CETINA"
                  linkTitle="VER REGISTRO"
                  url="https://www.youtube.com/watch?v=CPt2AlZ9jXI"
                  width="100%"
                  height="234px"
                  controls={false}
                  style={{ padding: 0, margin: 0 }}
                  loop
                />
              </Grid.Col>
            </Grid>
          </Box>
          <Box mt={100}>
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
                    nave espacial extraterrestre, mientras ciéntificos Rusos sostenían que el
                    elemento 115 se descompone en menos de un segundo, lo que lo hace incapaz de ser
                    utilizado.
                  </Text>
                </Box>
              </Grid.Col>
            </Grid>
          </Box>
        </Box>
      </Layout>
    </>
  );
}
