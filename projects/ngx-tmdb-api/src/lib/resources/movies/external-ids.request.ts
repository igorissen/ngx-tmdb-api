/**
 * https://developers.themoviedb.org/3/movies/get-movie-external-ids
 */

import { Observable } from 'rxjs';
import { TMDbMovieExternalIds } from '../../dtos/movies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchMovieExternalIds = (
  options: RequestOptions<never>
): Observable<TMDbMovieExternalIds | null> => {
  return new Request<never, TMDbMovieExternalIds>({
    ...options,
    path: `/movie/${options.pathParams?.movie_id}/external_ids`
  }).execute();
};
