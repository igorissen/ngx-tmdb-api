import { Observable } from 'rxjs';
import { TMDbMovieAvailableProviders } from '../../dtos/watch-providers';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getMovieProviders = (
  options: RequestOptions<never>
): Observable<TMDbMovieAvailableProviders | null> => {
  return new Request<never, TMDbMovieAvailableProviders>({
    ...options,
    path: '/watch/providers/movie'
  }).execute();
};
