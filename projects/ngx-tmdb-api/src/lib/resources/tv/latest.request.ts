import { Observable } from 'rxjs';
import { TMDbTvDetails } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getLatest = (
  options?: RequestOptions<never>
): Observable<TMDbTvDetails | null> => {
  return new Request<never, TMDbTvDetails>({
    ...options,
    path: '/tv/latest'
  }).execute();
};
