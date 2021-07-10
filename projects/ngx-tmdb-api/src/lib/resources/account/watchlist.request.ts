import { Observable } from 'rxjs';
import {
  TMDbAccountMoviesWatchlist,
  TMDbAccountTvShowsWatchlist,
  TMDbAddToWatchlistRequestDTO
} from '../../dtos/account';
import { TMDbResponseStatus } from '../../dtos/common';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getMovieWatchlist = (
  options: RequestOptions<never>
): Observable<TMDbAccountMoviesWatchlist | null> => {
  return new Request<never, TMDbAccountMoviesWatchlist>({
    ...options,
    path: `/account/${options.pathParams?.account_id}/watchlist/movies`
  }).execute();
};

export const getTvShowsWatchlist = (
  options: RequestOptions<never>
): Observable<TMDbAccountTvShowsWatchlist | null> => {
  return new Request<never, TMDbAccountTvShowsWatchlist>({
    ...options,
    path: `/account/${options.pathParams?.account_id}/watchlist/tv`
  }).execute();
};

export const addToWatchlist = (
  options: RequestOptions<TMDbAddToWatchlistRequestDTO>
): Observable<TMDbResponseStatus | null> => {
  return new Request<TMDbAddToWatchlistRequestDTO, TMDbResponseStatus>({
    ...options,
    method: 'POST',
    path: `/account/${options.pathParams?.account_id}/watchlist`
  }).execute();
};
