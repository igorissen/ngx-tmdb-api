/**
 *
 */

import { Observable } from 'rxjs';
import { TMDbMovieRecommendations } from '../../dtos/movies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchMovieRecommendations = (
  options: RequestOptions<never>
): Observable<TMDbMovieRecommendations | null> => {
  return new Request<never, TMDbMovieRecommendations>({
    ...options,
    path: `/movie/${options.pathParams?.movie_id}/recommendations`
  }).execute();
};
