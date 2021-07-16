import { Gender } from '../enums';
import { TMDbImage, TMDbPaginated } from './common';
import { TMDbMovieDetails } from './movies';
import { TMDbTvDetails } from './tv';

export type TMDbPeopleDetails = {
  birthday?: string;
  known_for_department?: string;
  deathday?: string;
  id?: number;
  name?: string;
  also_known_as?: string[];
  gender?: Gender;
  biography?: string;
  popularity?: number;
  place_of_birth?: string;
  profile_path?: string;
  adult?: boolean;
  imdb_id?: string;
  homepage?: string;
  known_for?: Array<TMDbMovieDetails | TMDbTvDetails>;
};
export type TMDbTaggedImage = TMDbImage & {
  image_type?: string;
  media_type?: string;
  media?: TMDbMovieDetails | TMDbTvDetails;
};

export type TMDbPeopleTaggedImages = TMDbPaginated<TMDbTaggedImage>;
export type TMDbPeoplePopular = TMDbPaginated<TMDbPeopleDetails>;
