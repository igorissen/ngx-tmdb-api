import { TMDbCollectionDetails } from './collections';
import { TMDbKeyword, TMDbPaginated, TMDbProductionCompany } from './common';
import { TMDbMovieDetails } from './movies';
import { TMDbPeopleDetails } from './people';
import { TMDbTvDetails } from './tv';

export type TMDbSearchCompanies = TMDbPaginated<TMDbProductionCompany>;
export type TMDbSearchCollections = TMDbPaginated<TMDbCollectionDetails>;
export type TMDbSearchKeywords = TMDbPaginated<TMDbKeyword>;
export type TMDbSearchMovies = TMDbPaginated<TMDbMovieDetails>;
export type TMDbSearchTvShows = TMDbPaginated<TMDbTvDetails>;
export type TMDbSearchPeople = TMDbPaginated<TMDbPeopleDetails>;
export type TMDbSearchMulti = TMDbPaginated<
  TMDbMovieDetails | TMDbTvDetails | TMDbPeopleDetails
>;
