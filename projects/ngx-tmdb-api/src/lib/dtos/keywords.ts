import { TMDbKeyword, TMDbPaginated } from './common';
import { TMDbMovieDetails } from './movies';

export type TMDbKeywordDetails = TMDbKeyword;
export type TMDbKeywordMoviesList = TMDbPaginated<TMDbMovieDetails>;
