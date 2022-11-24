import { PersonProps } from './Person';

const BASE_PATH = '/assets/investigators';
const investigators: { [key: string]: PersonProps } = {
  hassan_navas: {
    name: 'Hassan Navas',
    year: '1956',
    imgSrc: `${BASE_PATH}/hassan_navas.png`,
    occupation: 'Científico e Investigador',
    university: 'Universidad de Ciencia y Tecnología de Missouri - Missouri S&T',
  },
  abel_borrego: {
    name: 'Abel Borrego',
    year: '1964',
    imgSrc: `${BASE_PATH}/abel_borrego.png`,
    occupation: 'Físico Nuclear',
    university: 'Universidad de Ciencia y Tecnología de Missouri - Missouri S&T',
  },
  arnau_ferreiro: {
    name: 'Arnau Ferreiro',
    year: '1949',
    imgSrc: `${BASE_PATH}/arnau_ferreiro.png`,
    occupation: 'Geofísico y Lingüista Aeronáutico',
    university: 'UNAM - Universidad Nacional Autónoma de México',
  },
  carlos_javier_tome: {
    name: 'carlos javier tome',
    year: '1951',
    imgSrc: `${BASE_PATH}/carlos_javier_tome.png`,
    occupation: 'Físico en Electromagnetismo y Termodinámica',
    university: 'Universidad Thomas Jefferson',
  },
  maider_parada: {
    name: 'Maider Parda',
    year: '1959',
    imgSrc: `${BASE_PATH}/maider_parada.png`,
    occupation: 'Física en Electromagnetismo e Hidráulica',
    university: 'Pittsburg State University',
  },
  santos_tejada: {
    name: 'Santos Tejada',
    imgSrc: `${BASE_PATH}/santos_tejada.png`,
    occupation: 'Ingeniero en Protección Radiológica y Seguridad de las Fuentes de Radiación',
  },
  khadija_trillo: {
    name: 'Khadija Trillo',
    year: '1947',
    imgSrc: `${BASE_PATH}/khadija_trillo.png`,
    occupation: 'Física en Materia Condensada y Termofuidodinámica',
    university: 'MTSU - Middle Tennessee State University',
  },
  xabier_santiago: {
    name: 'Xabier Santiago',
    year: '1957',
    imgSrc: `${BASE_PATH}/xabier_santiago.png`,
    occupation: 'Ingeniero Cuántico especializado en Núcleos atómicos',
    university: 'Florida Institute of Technology',
  },
  zakaria_vargas: {
    name: 'Zakaria Vargas',
    year: '1946',
    imgSrc: `${BASE_PATH}/zakaria_vargas.png`,
    occupation:
      'Ingeniero Aerospacial especializado en Física y Química aplicada de la Aeronáutica',
    university: 'Universidad Thomas Jefferson',
  },
  aurora_moran: {
    name: 'Aurora Moran',
    imgSrc: `${BASE_PATH}/aurora_moran.png`,
    occupation: 'Ingeniera Aeroespacial especializada en Propulsión y Aerodinámica',
  },
};

export default investigators;
