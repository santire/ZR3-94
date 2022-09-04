import { Container, Header as MantineHeader } from '@mantine/core';
import { Brand } from '../Brand/Brand';
import { Search } from '../Search/Search';

import useStyles from './Header.styles';

export function Header() {
  const { classes } = useStyles();

  return (
    <MantineHeader className={classes.header} height={128} mb={120}>
      <Container size={1280}>
        <div className={classes.inner}>
          <Brand />
          <Search />
        </div>
      </Container>
    </MantineHeader>
  );
}
