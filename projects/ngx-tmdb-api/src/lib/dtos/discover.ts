import { TMDbPaginated } from './common';
import { TMDbMovieDetails } from './movies';
import { TMDbTvDetails } from './tv';

export type TMDbDiscoverMovie = TMDbPaginated<TMDbMovieDetails>;
export type TMDbDiscoverTv = TMDbPaginated<TMDbTvDetails>;
