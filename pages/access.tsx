import { Box } from '@mantine/core';
import Layout from '../components/Layout/Layout';
import { SectionTitle } from '../components/SectionTitle/SectionTitle';
import { VideoPlayer } from '../components/VideoPlayer/VideoPlayer';

export default function Access() {
  return (
    <>
      <Layout
        meta={{
          title: 'ZR3-94',
          description: '',
        }}
      >
        <Box mt={100} mb={100}>
          <Box mb={60}>
            <SectionTitle title="ACCESO AL ZR3-94" />
          </Box>

          <Box ml={20} my={60}>
            <VideoPlayer
              linkText=""
              linkTitle=""
              url="https://www.youtube.com/watch?v=J4okqgpwXa0"
              width="100%"
              height="604px"
              controls={false}
              style={{ padding: 0, margin: 0 }}
            />
          </Box>
        </Box>
      </Layout>
    </>
  );
}
