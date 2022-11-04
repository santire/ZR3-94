import { AnomalyProps } from './Anomaly';

const BASE_PATH = '/assets/anomalies';
const anomalies: { [key: string]: AnomalyProps } = {
  fosa_de_las_marianas: {
    iconImg: `${BASE_PATH}/fosa_de_las_marianas/icon.png`,
    location: 'Islas Marianas',
    title: 'Fosa de las Marianas',
    videoUrl: 'https://www.youtube.com/watch?v=aTsHZNWuqbc',
  },
  cerro_uritorco: {
    iconImg: `${BASE_PATH}/cerro_uritorco/icon.png`,
    location: 'Argentina',
    title: 'Cerro Uritorco',
    videoUrl: 'https://www.youtube.com/watch?v=4lwLTzE-tZc',
  },
  rio_cetina: {
    iconImg: `${BASE_PATH}/rio_cetina/icon.png`,
    location: 'Croacia',
    title: 'Río Cetina',
    videoUrl: 'https://www.youtube.com/watch?v=2OM9wvmlekQ',
  },
  kimberly_big_hole: {
    iconImg: `${BASE_PATH}/kimberly_big_hole/icon.png`,
    location: 'Sudáfrica',
    title: 'Kimberly Big Hole',
    videoUrl: 'https://www.youtube.com/watch?v=aUVxtLEXwts',
  },
  ojo_del_delta: {
    iconImg: `${BASE_PATH}/ojo_del_delta/icon.png`,
    location: 'Argentina',
    title: 'Ojo del Delta/Ojo Misterioso',
    videoUrl: 'https://www.youtube.com/watch?v=nOlWQCq_ot8',
  },
  desierto_de_atacama: {
    iconImg: `${BASE_PATH}/desierto_de_atacama/icon.png`,
    location: 'Chile',
    title: 'Desierto de Atacama',
    videoUrl: 'https://www.youtube.com/watch?v=WFAcn-bpYqc',
  },
};

export default anomalies;
