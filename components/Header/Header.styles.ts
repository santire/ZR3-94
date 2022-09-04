import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    background: 'none',
    borderBottom: `1px solid ${theme.white}`,
  },

  inner: {
    height: 128,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));
