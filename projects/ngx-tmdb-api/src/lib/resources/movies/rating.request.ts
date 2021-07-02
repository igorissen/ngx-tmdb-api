import { Observable } from 'rxjs';
import { TMDbResponseStatus } from '../../dtos/common';
import { TMDbRateMovieRequestDTO } from '../../dtos/movies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

/**
 * https://developers.themoviedb.org/3/movies/delete-movie-rating
 *
 * @param options
 */
export const deleteMovieRating = (
  options: RequestOptions<never>
): Observable<TMDbResponseStatus | null> => {
  return new Request<never, TMDbResponseStatus>({
    ...options,
    method: 'DELETE',
    path: `/movie/${options.pathParams?.movie_id}/rating`
  }).execute();
};

/**
 * https://developers.themoviedb.org/3/movies/rate-movie
 *
 * @param options
 */
export const rateMovie = (
  options: RequestOptions<TMDbRateMovieRequestDTO>
): Observable<TMDbResponseStatus | null> => {
  return new Request<TMDbRateMovieRequestDTO, TMDbResponseStatus>({
    ...options,
    method: 'POST',
    path: `/movie/${options.pathParams?.movie_id}/rating`
  }).execute();
};
