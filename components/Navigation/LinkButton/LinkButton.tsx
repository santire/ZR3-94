import { Center, Image } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useStyles from './LinkButton.styles';

interface LinkButtonProps {
  title: string;
  path: string;
  locked?: boolean;
}

export function LinkButton({ title, path, locked }: LinkButtonProps) {
  const { classes } = useStyles();
  const router = useRouter();
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    setSelected(router.pathname === path);
  }, [router, setSelected]);

  const content = (
    <div
      style={locked ? {} : { cursor: 'pointer' }}
      onClick={() => localStorage.setItem('scrollInto', 'true')}
    >
      <div className={classes.container}>
        <Center>
          <p className={classes.text}>{selected ? <strong>{title}</strong> : title}</p>
        </Center>
      </div>
      <div
        className={classes.arrowContainer}
        style={{ backgroundColor: locked ? '#69BAC6' : selected ? '#C800FA' : '#6D59C9' }}
      >
        <Center>
          <Image style={{ position: 'relative', top: 4 }} src="/assets/arrow.svg" />
        </Center>
      </div>
    </div>
  );

  return (
    <>
      {locked ? (
        content
      ) : (
        <Link href={path} passHref>
          {content}
        </Link>
      )}
    </>
  );
}
