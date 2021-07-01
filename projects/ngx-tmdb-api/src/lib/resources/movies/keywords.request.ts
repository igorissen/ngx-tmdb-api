/**
 *
 */

import { Observable } from 'rxjs';
import { TMDbMovieKeywords } from '../../dtos/movies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchMovieKeywords = (
  options: RequestOptions<never>
): Observable<TMDbMovieKeywords | null> => {
  return new Request<never, TMDbMovieKeywords>({
    ...options,
    path: `/movie/${options.pathParams?.movie_id}/keywords`
  }).execute();
};
