import { TMDbMediaImages, TMDbMediaTranslations } from './common';
import { TMDbMovieDetails } from './movies';
import { TMDbTvDetails } from './tv';

export type TMDbCollectionDetails = {
  id?: number;
  name?: string;
  overview?: string;
  backdrop_path?: string;
  poster_path?: string;
  parts?: TMDbCollectionPart[];
};

export type TMDbCollectionImages = TMDbMediaImages;
export type TMDbCollectionTranslations = TMDbMediaTranslations;
export type TMDbCollectionPart = TMDbMovieDetails & TMDbTvDetails;
