import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    textAlign: 'left',
    fontSize: 20,
    color: theme.white,
    textTransform: 'uppercase',
  },
  iconImg: {
    width: 75,
    marginLeft: 'auto',
  },
  contentCard: {
    border: `1px solid ${theme.white}`,
    borderRadius: 50,
    padding: theme.spacing.xl,
    width: '100%',
  },
  separator: {
    width: 0,
    height: 37,
    borderLeft: `1px solid ${theme.white}`,
  },
  videoWrapper: {
    border: `1px solid ${theme.white}`,
    borderRadius: 50,
    overflow: 'hidden',
    width: '100%',
    padding: 0,
    margin: 0,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));
