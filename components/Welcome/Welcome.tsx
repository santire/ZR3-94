import { Title, Text, Anchor, Image, Container } from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();
  const textWords =
    `Somos Investigadores de Anomalías Trascendentales (I.A.T), una agrupación integrada por
            investigadores desertores de grandes y confidenciales estudios sobre avances
            tecnológicos. Nuestro objetivo es advertir a la humanidad sobre ZR3-94 y dar cuenta de
            los importantes acontecimientos que están occuriendo en el mundo (como consecuencia del
            desarrollo del mismo) y que los gobiernos de mayor poder, encabezados por los Estados
Unidos, quieren mantener ocultos.`
      .split(' ')
      .filter((e) => !!e);
  const [paintedCount, setPaintedCount] = useState(textWords.length);

  const spanMouseOverHandler = (event: React.MouseEvent<HTMLSpanElement>) => {
    const word: HTMLSpanElement = event.currentTarget;
    if (word.style.color != 'greenyellow' && Math.random() <= 0.05) {
      word.style.color = 'greenyellow';
      setPaintedCount((oldCount) => oldCount - 1);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Image
          className={classes.image}
          src="assets/logo.png"
          alt="logo"
          width="11em"
          height="11em"
          p={0}
          hidden={paintedCount <= 0}
        />
        <Container m={0} pt="3em">
          <Title className={classes.title} order={3} hidden={paintedCount <= 0}>
            INVESTIGADORES
            <br />
            DE ANOMALÍAS TRASCENDENTALES
          </Title>
          {paintedCount > 0 ? (
            <Text align="justify" mx="auto" mt="xl" mb="2em">
              {textWords.map((w, i) => (
                <span
                  className={classes.text}
                  id={`w${i}`}
                  key={i}
                  onMouseOver={spanMouseOverHandler}
                >
                  {w}{' '}
                </span>
              ))}
            </Text>
          ) : (
            <Text size={128} align="justify" mx="auto" mt="2em" mb="2em">
              te la creiste xd
            </Text>
          )}
        </Container>
      </div>
      <Link href="/home" passHref>
        <Anchor className={classes.link} component="a" hidden={paintedCount <= 0}>
          <Text align="center">Accedé a toda la información</Text>
        </Anchor>
      </Link>
    </div>
  );
}
