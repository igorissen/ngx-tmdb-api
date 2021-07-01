/**
 * https://developers.themoviedb.org/3/movies/get-upcoming
 */

import { Observable } from 'rxjs';
import { TMDbMovieDetails } from '../../dtos/movies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchLatestMovie = (
  options?: RequestOptions<never>
): Observable<TMDbMovieDetails | null> => {
  return new Request<never, TMDbMovieDetails>({
    ...options,
    path: '/movie/latest'
  }).execute();
};
