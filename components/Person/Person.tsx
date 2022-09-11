import { Text, Box, Image, Center } from '@mantine/core';
import useStyles from './Person.styles';

export interface PersonProps {
  name: string;
  imgSrc: string;
  occupation?: string;
  year?: string;
  university?: string;
}

export function Person(props: PersonProps) {
  const { name, imgSrc, occupation, year, university } = props;
  const { classes } = useStyles();
  return (
    <Box style={{ maxWidth: 125 }}>
      <Center>
        <Image width={125} height={125} className={classes.image} src={imgSrc} />
      </Center>
      <Text m="xs" p={0} align="center" className={classes.title}>
        {name}
      </Text>
      <Text m={0} p={0} className={classes.subtitle}>
        {year ? `-${year}-` : '\u00a0\u00a0'}
      </Text>
      {occupation ? (
        <Text m={0} p={0} className={classes.subtitle}>
          {occupation}
        </Text>
      ) : null}
      {university ? (
        <Text m={0} p={0} align="left" className={classes.subtitle}>
          ({university})
        </Text>
      ) : null}
    </Box>
  );
}
