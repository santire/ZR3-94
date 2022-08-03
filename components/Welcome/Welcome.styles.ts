import { createStyles } from '@mantine/core';

export default createStyles((_) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 1400,
    width: '80%',
    margin: '10% auto 0 auto',
  },
  content: {
    display: 'flex',
    margin: '0 auto',
  },
  link: {
    fontSize: 22,
    letterSpacing: 8,
    color: 'yellowgreen',
  },
}));
