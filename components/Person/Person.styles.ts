import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  image: {
    margin: 0,
    padding: 0,
  },
  title: {
    fontSize: 13,
    color: theme.white,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 800,
  },
  subtitle: {
    fontSize: 12,
    color: theme.white,
    textAlign: 'center',
  },
}));
