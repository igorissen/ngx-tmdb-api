import { TMDbPaginated } from './common';
import { TMDbMovieDetails } from './movies';
import { TMDbTvDetails, TMDbTvEpisodeDetails } from './tv';

export type TMDbGuestSessionsRatedMovies = TMDbPaginated<TMDbMovieDetails>;
export type TMDbGuestSessionsRatedTvShows = TMDbPaginated<TMDbTvDetails>;
export type TMDbGuestSessionsRatedTvEpisodes =
  TMDbPaginated<TMDbTvEpisodeDetails>;
