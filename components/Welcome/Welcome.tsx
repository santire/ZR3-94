import { Title, Text, Anchor, Image } from '@mantine/core';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <div className={classes.content}>
      <Image src="assets/logo.png" alt="logo" width="128px" height="128px" />
      <Title align="left" order={4} mt={'25%'}>
        INVESTIGADORES
        <br />
        DE ANOMALÍAS TRASCENDENTALES
      </Title>
      <Text color="dimmed" align="justify" size="lg" mx="auto" mt="xl">
        Somos Investigadores de Anomalías Trascendentales (I.A.T), una agrupación integrada por
        investigadores desertores de grandes y confidenciales estudios sobre avances tecnológicos.
        Nuestro objetivo es advertir a la humanidad sobre ZR3-94 y dar cuenta de los importantes
        acontecimientos que están occuriendo en el mundo (como consecuencia del desarrollo del
        mismo) y que los gobiernos de mayor poder, encabezados por los Estados Unidos, quieren
        mantener ocultos.
      </Text>
      <Anchor align="center" mt="xl" color="yellow">
        Accede a toda la información
      </Anchor>
    </div>
  );
}
