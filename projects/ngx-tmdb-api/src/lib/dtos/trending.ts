import { TMDbPaginated } from './common';
import { TMDbMovieDetails } from './movies';
import { TMDbPeopleDetails } from './people';
import { TMDbTvDetails } from './tv';

export type TMDbTrendingMedias = TMDbPaginated<
  TMDbMovieDetails | TMDbTvDetails | TMDbPeopleDetails
>;
