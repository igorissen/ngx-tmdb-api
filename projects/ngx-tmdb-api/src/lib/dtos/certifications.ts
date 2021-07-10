import { TMDbCertification } from './common';

export type TMDbCertifications = {
  [key: string]: TMDbCertification[];
};
export type TMDbCertificationsResult = {
  certifications?: TMDbCertifications;
};

export type TMDbCertificationMovieCertifications = TMDbCertificationsResult;
export type TMDbCertificationTvCertifications = TMDbCertificationsResult;
