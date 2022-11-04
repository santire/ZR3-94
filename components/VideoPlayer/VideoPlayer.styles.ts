import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    textAlign: 'left',
    fontSize: 20,
    color: theme.white,
    textTransform: 'uppercase',
  },
  videoWrapper: {
    border: `1px solid ${theme.white}`,
    borderRadius: 50,
    overflow: 'hidden',
    padding: 0,
    margin: 0,
  },
  text: {
    color: '#C800FA',
    transform: 'uppercase',
  },
}));
