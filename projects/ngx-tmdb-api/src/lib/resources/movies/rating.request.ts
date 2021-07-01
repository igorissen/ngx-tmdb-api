/**
 *
 */

import { Observable } from 'rxjs';
import { TMDbResponseStatus } from '../../dtos/common';
import { RateMovieRequestDTO } from '../../dtos/movies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const deleteMovieRating = (
  options: RequestOptions<never>
): Observable<TMDbResponseStatus | null> => {
  return new Request<never, TMDbResponseStatus>({
    ...options,
    method: 'DELETE',
    path: `/movie/${options.pathParams?.movie_id}/rating`
  }).execute();
};

export const rateMovie = (
  options: RequestOptions<RateMovieRequestDTO>
): Observable<TMDbResponseStatus | null> => {
  return new Request<RateMovieRequestDTO, TMDbResponseStatus>({
    ...options,
    method: 'POST',
    path: `/movie/${options.pathParams?.movie_id}/rating`
  }).execute();
};
