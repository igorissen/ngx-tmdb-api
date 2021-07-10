import { getCreatedLists } from './created-lists.request';
import { getDetails } from './details.request';
import {
  getFavoriteMovies,
  getFavoriteTvShows,
  markAsFavorite
} from './favorite.request';
import {
  getRatedMovies,
  getRatedTvEpisodes,
  getRatedTvShows
} from './rated.request';
import {
  getMovieWatchlist,
  getTvShowsWatchlist,
  addToWatchlist
} from './watchlist.request';

export const Account = {
  getCreatedLists,
  getDetails,
  getFavoriteMovies,
  getFavoriteTvShows,
  markAsFavorite,
  getRatedMovies,
  getRatedTvEpisodes,
  getRatedTvShows,
  getMovieWatchlist,
  getTvShowsWatchlist,
  addToWatchlist
};
