/**
 * https://developers.themoviedb.org/3/tv/get-tv-watch-providers
 */

import { Observable } from 'rxjs';
import { TMDbTvWatchProviders } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchTvWatchProviders = (
  options: RequestOptions<never>
): Observable<TMDbTvWatchProviders | null> => {
  return new Request<never, TMDbTvWatchProviders>({
    ...options,
    path: `/tv/${options.pathParams?.tv_id}/watch/providers`
  }).execute();
};
