import { Observable } from 'rxjs';
import { TMDbTvAiringToday } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getTvAiringToday = (
  options?: RequestOptions<never>
): Observable<TMDbTvAiringToday | null> => {
  return new Request<never, TMDbTvAiringToday>({
    ...options,
    path: '/tv/airing_today'
  }).execute();
};
