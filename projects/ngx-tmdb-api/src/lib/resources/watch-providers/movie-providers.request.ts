/**
 * https://developers.themoviedb.org/3/watch-providers/get-movie-providers
 */

import { Observable } from 'rxjs';
import { TMDbMovieAvailableProviders } from '../../dtos/watch-providers';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchMovieAvailableProviders = (
  options: RequestOptions<never>
): Observable<TMDbMovieAvailableProviders | null> => {
  return new Request<never, TMDbMovieAvailableProviders>({
    ...options,
    path: '/watch/providers/movie'
  }).execute();
};
