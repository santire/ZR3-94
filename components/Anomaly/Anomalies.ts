import { AnomalyProps } from './Anomaly';

const BASE_PATH = '/assets/anomalies';
const investigators: { [key: string]: AnomalyProps } = {
  fosa_de_las_marianas: {
    iconImg: `${BASE_PATH}/fosa_de_las_marianas/icon.png`,
    location: 'Islas Marianas',
    title: 'Fosa de las Marianas',
    // videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    videoUrl: 'https://www.youtube.com/watch?v=G1IbRujko-A',
  },
};

export default investigators;
