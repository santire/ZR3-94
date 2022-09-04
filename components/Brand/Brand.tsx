import { Group, Image } from '@mantine/core';
import useStyles from './Brand.styles';

export function Brand() {
  const { classes } = useStyles();
  return (
    <Group spacing="xs">
      <Image src="/assets/logo_bw.svg" />
      <p className={classes.title}>INVESTIGADORES DE {<br />}ANOMALÍAS TRASCENDENTALES</p>
    </Group>
  );
}
