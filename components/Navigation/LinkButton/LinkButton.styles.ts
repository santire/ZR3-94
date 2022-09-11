import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 178,
    height: 180,
    border: `1px solid ${theme.white}`,
    borderRadius: 65,
    justifyContent: 'center',
  },
  text: {
    textTransform: 'uppercase',
    fontSize: 20,
    textAlign: 'center',
  },
  arrowContainer: {
    display: 'flex',
    width: 40,
    height: 40,
    border: `1px solid ${theme.white}`,
    borderRadius: 15,
    justifyContent: 'center',
    position: 'relative',
    left: 65,
    bottom: 22,
    backgroundColor: '#C800FA',
  },
}));
