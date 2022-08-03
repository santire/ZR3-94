import { createStyles } from '@mantine/core';

export default createStyles((_) => ({
  container: {
    display: 'flex',
    maxWidth: 1400,
    width: '75%',
    margin: '10% auto 0 auto',
  },
  content: {
    display: 'flex',
    margin: '0 auto',
  },
  link: {
    fontSize: 20,
    letterSpacing: 10,
    color: 'yellowgreen',
  },
}));
