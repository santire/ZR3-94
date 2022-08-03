import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
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
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column',
    },
  },
  title: {
    textAlign: 'left',
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      textAlign: 'center',
    },
  },
  text: {
    fontSize: 24,
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      flexDirection: 'column',
      fontSize: 18,
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column',
      fontSize: 14,
    },
  },
  link: {
    letterSpacing: 8,
    fontSize: 22,
    color: 'yellowgreen',
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      flexDirection: 'column',
      fontSize: 16,
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column',
      fontSize: 12,
    },
  },
  image: {
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      margin: '0 auto',
    },
  },
}));
