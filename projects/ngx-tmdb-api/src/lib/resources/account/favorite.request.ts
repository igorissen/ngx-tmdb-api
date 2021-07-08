import { Observable } from 'rxjs';
import {
  TMDbAccountFavoriteMovies,
  TMDbAccountFavoriteTvShows,
  TMDbMarkAsFavoriteRequestDTO
} from '../../dtos/account';
import { TMDbResponseStatus } from '../../dtos/common';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchAccountFavoriteMovies = (
  options: RequestOptions<never>
): Observable<TMDbAccountFavoriteMovies | null> => {
  return new Request<never, TMDbAccountFavoriteMovies>({
    ...options,
    path: `/account/${options.pathParams?.account_id}/favorite/movies`
  }).execute();
};

export const fetchAccountFavoriteTvShows = (
  options: RequestOptions<never>
): Observable<TMDbAccountFavoriteTvShows | null> => {
  return new Request<never, TMDbAccountFavoriteTvShows>({
    ...options,
    path: `/account/${options.pathParams?.account_id}/favorite/tv`
  }).execute();
};

export const markAsFavorite = (
  options: RequestOptions<TMDbMarkAsFavoriteRequestDTO>
): Observable<TMDbResponseStatus | null> => {
  return new Request<TMDbMarkAsFavoriteRequestDTO, TMDbResponseStatus>({
    ...options,
    method: 'POST',
    path: `/account/${options.pathParams?.account_id}/favorite`
  }).execute();
};
