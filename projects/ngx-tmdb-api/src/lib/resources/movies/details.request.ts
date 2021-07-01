/**
 * https://developers.themoviedb.org/3/movies/get-movie-details
 */

import { Observable } from 'rxjs';
import { TMDbMovieDetails } from '../../dtos/movies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchMovieDetails = (
  options: RequestOptions<never>
): Observable<TMDbMovieDetails | null> => {
  return new Request<never, TMDbMovieDetails>({
    ...options,
    path: `/movie/${options.pathParams?.movie_id}`
  }).execute();
};
