import { TMDbAvatar, TMDbPaginated } from './common';
import { TMDbListDetails } from './lists';
import { TMDbMovieDetails } from './movies';
import { TMDbTvDetails, TMDbTvEpisodeDetails } from './tv';

export type TMDbMediaType = 'movie' | 'tv';

export type TMDbAccountDetails = {
  id?: number;
  iso_639_1?: string;
  iso_3166_1?: string;
  name?: string;
  include_adult?: boolean;
  username?: string;
  avatar?: TMDbAvatar;
};

export type TMDbAccountCreatedLists = TMDbPaginated<TMDbListDetails>;
export type TMDbAccountFavoriteMovies = TMDbPaginated<TMDbMovieDetails>;
export type TMDbAccountFavoriteTvShows = TMDbPaginated<TMDbTvDetails>;
export type TMDbAccountRatedMovies = TMDbPaginated<TMDbMovieDetails>;
export type TMDbAccountRatedTvShows = TMDbPaginated<TMDbTvDetails>;
export type TMDbAccountRatedTvEpisodes = TMDbPaginated<TMDbTvEpisodeDetails>;
export type TMDbAccountMoviesWatchlist = TMDbPaginated<TMDbMovieDetails>;
export type TMDbAccountTvShowsWatchlist = TMDbPaginated<TMDbTvDetails>;

export type TMDbMarkAsFavoriteRequestDTO = {
  favorite: boolean;
  media_id: number;
  media_type: TMDbMediaType;
};
export type TMDbAddToWatchlistRequestDTO = {
  watchlist: boolean;
  media_id: number;
  media_type: TMDbMediaType;
};
