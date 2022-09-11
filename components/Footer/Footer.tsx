import { Text, Group, Anchor, Center, Divider, Box } from '@mantine/core';
import Link from 'next/link';
import { Fragment } from 'react';
import useStyles from './Footer.styles';

interface CustomLinkProps {
  value: string;
  href: string;
}

export function Footer() {
  const { classes } = useStyles();

  const links = [
    { value: 'Sobre Nosotros', href: '/home' },
    { value: 'Contacto', href: '/home' },
    { value: 'FAQS', href: '/home' },
    { value: 'Términos y Condiciones', href: '/home' },
  ];

  function CustomLink({ value, href }: CustomLinkProps) {
    return (
      <Link href={href} passHref>
        {/* <Anchor component="a" className={classes.text} style={{ border: '1px solid #F5F5F5' }}> */}
        <Anchor component="a" className={classes.text}>
          {value}
        </Anchor>
      </Link>
    );
  }
  return (
    <Box style={{ maxWidth: 1280 }}>
      <Center>
        <Group>
          <Text className={classes.text}>
            <span className={classes.title}> ZR3-94 </span> © Todos los derechos reservados
          </Text>
          <Group>
            {links.map((p, i) => (
              <Fragment key={p.value}>
                {i === 0 ? <div>|</div> : null}
                <CustomLink {...p} />
                <div>|</div>
              </Fragment>
            ))}
          </Group>
          <Divider orientation="vertical" color="#F5F5F5" />
          <Text className={classes.text}>
            VISITAS: <span className={classes.views}>1248</span>
          </Text>
        </Group>
      </Center>
    </Box>
  );
}
