/**
 *
 */

import { Observable } from 'rxjs';
import { TMDbMovieLists } from '../../dtos/movies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchMovieLists = (
  options: RequestOptions<never>
): Observable<TMDbMovieLists | null> => {
  return new Request<never, TMDbMovieLists>({
    ...options,
    path: `/movie/${options.pathParams?.movie_id}/lists`
  }).execute();
};
