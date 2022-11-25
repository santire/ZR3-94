import { Text } from '@mantine/core';
import { useEffect } from 'react';
import useSWR from 'swr';
import useStyles from './Footer.styles';

const View = ({ str }: { str: string }) => {
  const { classes } = useStyles();
  return (
    <Text className={classes.text}>
      VISITAS: <span className={classes.views}>{str}</span>
    </Text>
  );
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function ViewCount({ slug }: { slug: string }) {
  const { data, error } = useSWR(`/api/views/${slug}`, fetcher);
  const views = new Number(data?.total);

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      });

    registerView();
  }, [slug]);

  if (error) return <View str="???" />;
  if (!data) return <View str="..." />;

  return <View str={views.toString()} />;
}
