import { Title, Text, Anchor, Image, Container } from '@mantine/core';
import Link from 'next/link';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Image src="assets/logo.png" alt="logo" width="11em" height="11em" p={0} />
        <Container m={0} pt="3em">
          <Title align="left" order={3}>
            INVESTIGADORES
            <br />
            DE ANOMALÍAS TRASCENDENTALES
          </Title>
          <Text align="justify" size={24} mx="auto" mt="xl" mb="2em">
            Somos Investigadores de Anomalías Trascendentales (I.A.T), una agrupación integrada por
            investigadores desertores de grandes y confidenciales estudios sobre avances
            tecnológicos. Nuestro objetivo es advertir a la humanidad sobre ZR3-94 y dar cuenta de
            los importantes acontecimientos que están occuriendo en el mundo (como consecuencia del
            desarrollo del mismo) y que los gobiernos de mayor poder, encabezados por los Estados
            Unidos, quieren mantener ocultos.
          </Text>
        </Container>
      </div>

          <Link href="/home" passHref>
            <Anchor className={classes.link} component="a">
              <Text align="center">Accedé a toda la información</Text>
            </Anchor>
          </Link>
    </div>
  );
}
