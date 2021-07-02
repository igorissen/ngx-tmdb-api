/**
 * https://developers.themoviedb.org/3/watch-providers/get-tv-providers
 */

import { Observable } from 'rxjs';
import { TMDbTvAvailableProviders } from '../../dtos/watch-providers';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchTvAvailableProviders = (
  options: RequestOptions<never>
): Observable<TMDbTvAvailableProviders | null> => {
  return new Request<never, TMDbTvAvailableProviders>({
    ...options,
    path: '/watch/providers/tv'
  }).execute();
};
