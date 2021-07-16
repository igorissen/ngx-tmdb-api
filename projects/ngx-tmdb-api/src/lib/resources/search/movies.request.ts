import { Observable } from 'rxjs';
import { TMDbSearchMovies } from '../../dtos/search';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const searchMovies = (
  options: RequestOptions<never>
): Observable<TMDbSearchMovies | null> => {
  return new Request<never, TMDbSearchMovies>({
    ...options,
    path: '/search/movie'
  }).execute();
};
