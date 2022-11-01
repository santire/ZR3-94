import { Anchor, Container, Text } from '@mantine/core';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ReactPlayerProps } from 'react-player';
import useStyles from './VideoPlayer.styles';

interface VideoProps extends ReactPlayerProps {
  linkTitle?: string;
  linkText: string;
  inverted?: boolean;
}

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export function VideoPlayer({ inverted, linkTitle, linkText, ...meta }: VideoProps) {
  const { classes } = useStyles();

  const Video = (
    <div className={classes.videoWrapper}>
      <ReactPlayer {...meta} style={{ padding: 0, margin: 0 }} />
    </div>
  );

  const VideoLink = (
    <Container ml="xl" mt="sm" mb="sm">
      <Text size={16} transform="uppercase">
        {linkTitle ?? 'Ver'}:
        <br />
        <Link href={typeof meta.url === 'string' ? meta.url : ''} passHref>
          <Anchor component="a" className={classes.text}>
            {linkText.split('/')[0]}
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