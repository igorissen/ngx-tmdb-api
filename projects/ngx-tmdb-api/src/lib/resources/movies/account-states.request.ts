/**
 * https://developers.themoviedb.org/3/movies/get-movie-account-states
 */

import { Observable } from 'rxjs';
import { TMDbMovieAccountStates } from '../../dtos/movies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchMovieAccountStates = (
  options: RequestOptions<never>
): Observable<TMDbMovieAccountStates | null> => {
  return new Request<never, TMDbMovieAccountStates>({
    ...options,
    path: `/movie/${options.pathParams?.movie_id}/account_states`
  }).execute();
};
