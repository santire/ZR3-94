import { Anchor, Container, Text } from '@mantine/core';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ReactPlayerProps } from 'react-player';
import useStyles from './VideoPlayer.styles';

interface VideoProps extends ReactPlayerProps {
  linkTitle?: string;
  linkText: string;
  inverted?: boolean;
  width?: string | number;
  height?: string | number;
}

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export function VideoPlayer({ inverted, linkTitle, linkText, width, height, ...meta }: VideoProps) {
  const { classes } = useStyles();

  const Video = (
    <div
      className={classes.videoWrapper}
      style={{ width: width ?? '100%', height: height ?? '100%' }}
    >
      <ReactPlayer width="100%" height="100%" {...meta} style={{ padding: 0, margin: 0 }} />
    </div>
  );

  const VideoLink = (
    <Container ml="xl" my="sm" px="xl">
      <Text size={16} transform="uppercase">
        {linkTitle ?? 'Ver'}
        {linkTitle !== '' ? ':' : ''}
        <br />
        <Link href={typeof meta.url === 'string' ? meta.url : ''} passHref>
          <Anchor component="a" className={classes.text}>
            {linkText.split('&br&').map((str) => (
              <Text key={str} m={0}>
                {str}
              </Text>
            ))}
          </Anchor>
        </Link>
      </Text>
    </Container>
  );
  return (
    <>
      {inverted ? VideoLink : null}
      {Video}
      {!inverted ? VideoLink : null}
    </>
  );
}
