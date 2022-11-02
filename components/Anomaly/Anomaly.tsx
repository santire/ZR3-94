import { Container, Group, Image, List, Text } from '@mantine/core';
import { IconMapPin } from '@tabler/icons';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
import useStyles from './Anomaly.styles';

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
    <VideoPlayer
      inverted={inverted}
      linkTitle="Ver Anomalía"
      linkText={title.split('/')[0]}
      url={videoUrl}
      width="100%"
      height="100%"
      controls={false}
      style={{ padding: 0, margin: 0 }}
    />
  );

  return (
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
  );
}
