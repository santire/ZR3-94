import { Autocomplete, Box, Modal } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { useEffect, useState } from 'react';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';

export function Search() {
  const [value, setValue] = useState('');
  const [opened, setOpened] = useState(false);
  const [videoLink, setVideoLink] = useState('');

  useEffect(() => {
    if (value === 'aleph') {
      window.location.href =
        'https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxiaWJsaWJyb3NwZGZ8Z3g6NWUyOTU3NzQxYmM3NWM1Yg';
    }

    if (value === 'gandalf') {
      setOpened(true);
      setValue('');
      setVideoLink('https://www.youtube.com/watch?v=G1IbRujko-A');
    }

    if (value === 'boca') {
      setOpened(true);
      setValue('');
      setVideoLink('https://www.youtube.com/watch?v=r-QnXHnCedI');
    }
  }, [value, setOpened]);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        overflow="inside"
        centered
        padding="xl"
        size="fit"
        withCloseButton={false}
      >
        <Box ml={20} my={60}>
          <VideoPlayer
            linkText=""
            linkTitle=""
            url={videoLink}
            width="500px"
            height="280px"
            controls={false}
            style={{ padding: 0, margin: 0 }}
            playing
          />
        </Box>
      </Modal>
      <Autocomplete
        value={value}
        onChange={setValue}
        icon={<IconSearch size={20} stroke={2} color="black" />}
        variant="filled"
        radius="xl"
        size="lg"
        height={40}
        data={[]}
        styles={{
          input: { background: '#D9D9D9', minWidth: 324, color: 'black' },
        }}
      />
    </>
  );
}
