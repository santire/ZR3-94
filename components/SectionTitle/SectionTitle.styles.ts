import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    width: '100%',
    textAlign: 'left',
    borderBottom: `1px solid ${theme.white}`,
    lineHeight: '0.1em',
    margin: '10px 0 20px',

    span: {
      background: theme.black,
      backgroundImage: "url('/assets/background.svg')",
      padding: '0 20px',
    },
  },
  titleRight: {
    width: '100%',
    textAlign: 'right',
    borderBottom: `1px solid ${theme.white}`,
    lineHeight: '0.1em',
    margin: '20px 0 10px',

    span: {
      background: theme.black,
      backgroundImage: "url('/assets/background.svg')",
      padding: '0 20px',
    },
  },
}));
