/**
 *
 */

import { Observable } from 'rxjs';
import { TMDbMovieChanges } from '../../dtos/movies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchMovieChanges = (
  options: RequestOptions<never>
): Observable<TMDbMovieChanges | null> => {
  return new Request<never, TMDbMovieChanges>({
    ...options,
    path: `/movie/${options.pathParams?.movie_id}/changes`
  }).execute();
};
