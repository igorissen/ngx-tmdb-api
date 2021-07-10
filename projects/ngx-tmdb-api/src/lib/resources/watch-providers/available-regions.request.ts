import { Observable } from 'rxjs';
import { TMDbAvailableWatchProviders } from '../../dtos/watch-providers';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getAvailableRegions = (
  options: RequestOptions<never>
): Observable<TMDbAvailableWatchProviders | null> => {
  return new Request<never, TMDbAvailableWatchProviders>({
    ...options,
    path: '/watch/providers/regions'
  }).execute();
};
