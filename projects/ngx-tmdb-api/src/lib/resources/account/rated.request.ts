import { Observable } from 'rxjs';
import {
  TMDbAccountRatedMovies,
  TMDbAccountRatedTvEpisodes,
  TMDbAccountRatedTvShows
} from '../../dtos/account';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchAccountRatedMovies = (
  options: RequestOptions<never>
): Observable<TMDbAccountRatedMovies | null> => {
  return new Request<never, TMDbAccountRatedMovies>({
    ...options,
    path: `/account/${options.pathParams?.account_id}/rated/movies`
  }).execute();
};

export const fetchAccountRatedTvShows = (
  options: RequestOptions<never>
): Observable<TMDbAccountRatedTvShows | null> => {
  return new Request<never, TMDbAccountRatedTvShows>({
    ...options,
    path: `/account/${options.pathParams?.account_id}/rated/tv`
  }).execute();
};

export const fetchAccountRatedTvEpisodes = (
  options: RequestOptions<never>
): Observable<TMDbAccountRatedTvEpisodes | null> => {
  return new Request<never, TMDbAccountRatedTvEpisodes>({
    ...options,
    path: `/account/${options.pathParams?.account_id}/watchlist`
  }).execute();
};
