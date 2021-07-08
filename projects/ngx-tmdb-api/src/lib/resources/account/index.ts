import { fetchAccountCreatedLists } from './created-lists.request';
import { fetchAccountDetails } from './details.request';
import {
  fetchAccountFavoriteMovies,
  fetchAccountFavoriteTvShows,
  markAsFavorite
} from './favorite.request';
import {
  fetchAccountRatedMovies,
  fetchAccountRatedTvEpisodes,
  fetchAccountRatedTvShows
} from './rated.request';
import {
  fetchAccountMoviesWatchlist,
  fetchAccountTvShowsWatchlist,
  addToWatchlist
} from './watchlist.request';

export const Account = {
  fetchAccountCreatedLists,
  fetchAccountDetails,
  fetchAccountFavoriteMovies,
  fetchAccountFavoriteTvShows,
  markAsFavorite,
  fetchAccountRatedMovies,
  fetchAccountRatedTvEpisodes,
  fetchAccountRatedTvShows,
  fetchAccountMoviesWatchlist,
  fetchAccountTvShowsWatchlist,
  addToWatchlist
};
