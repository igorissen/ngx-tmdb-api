import { Observable } from 'rxjs';
import { TMDbTvTopRated } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getTopRated = (
  options?: RequestOptions<never>
): Observable<TMDbTvTopRated | null> => {
  return new Request<never, TMDbTvTopRated>({
    ...options,
    path: '/tv/top_rated'
  }).execute();
};
