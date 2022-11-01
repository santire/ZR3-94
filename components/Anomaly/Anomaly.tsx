import { Anchor, Container, Group, Image, List, Text } from '@mantine/core';
import { IconMapPin } from '@tabler/icons';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import useStyles from './Anomaly.styles';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export interface AnomalyProps {
  iconImg: string;
  location: string;
  title: string;
  videoUrl: string;
  inverted?: boolean;
  children?: React.ReactNode;
}
export function Anomaly({ children, ...meta }: AnomalyProps) {
  const { iconImg, inverted = false, title, location, videoUrl } = meta;
  const { classes } = useStyles();

  const Card = (
    <div className={classes.contentCard}>
      <Group spacing="lg" noWrap>
        <Text className={classes.title}>{title}</Text>
        <Image className={classes.iconImg} src={iconImg} />
      </Group>

      <List ml={0} spacing="md" icon={<IconMapPin size={35} stroke="1px" />}>
        <List.Item key={location} style={{ maxWidth: 350 }}>
          <Text size={18}>{location}</Text>
        </List.Item>
      </List>
      {children}
    </div>
  );

  const Video = (
    <div className={classes.videoWrapper}>
      <ReactPlayer
        url={videoUrl}
        width="100%"
        height="100%"
        controls={false}
        style={{ padding: 0, margin: 0 }}
      />
    </div>
  );

  const VideoLink = (
    <Container ml="xl" mt="sm" mb="sm">
      <Text size={16} transform="uppercase">
        Ver anomalía:
        <br />
        <Link href={videoUrl} passHref>
          <Anchor component="a" className={classes.text}>
            {title.split('/')[0]}
          </Anchor>
        </Link>
      </Text>
    </Container>
  );
  return (
    <>
      {inverted ? VideoLink : null}
      <Container className={classes.container}>
        {inverted ? (
          <>
            {Video} <div className={classes.separator} /> {Card}
          </>
        ) : (
          <>
            {Card} <div className={classes.separator} /> {Video}
          </>
        )}
      </Container>
      {!inverted ? VideoLink : null}
    </>
  );
}
