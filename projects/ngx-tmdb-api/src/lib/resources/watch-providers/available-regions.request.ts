/**
 * https://developers.themoviedb.org/3/watch-providers/get-available-regions
 */

import { Observable } from 'rxjs';
import { TMDbAvailableWatchProviders } from '../../dtos/watch-providers';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchAvailableRegions = (
  options: RequestOptions<never>
): Observable<TMDbAvailableWatchProviders | null> => {
  return new Request<never, TMDbAvailableWatchProviders>({
    ...options,
    path: '/watch/providers/regions'
  }).execute();
};
