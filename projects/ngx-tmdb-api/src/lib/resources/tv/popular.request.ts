import { Observable } from 'rxjs';
import { TMDbTvPopular } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getPopular = (
  options?: RequestOptions<never>
): Observable<TMDbTvPopular | null> => {
  return new Request<never, TMDbTvPopular>({
    ...options,
    path: '/tv/popular'
  }).execute();
};
