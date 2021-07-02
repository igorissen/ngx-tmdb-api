/**
 * https://developers.themoviedb.org/3/tv/get-latest-tv
 */

import { Observable } from 'rxjs';
import { TMDbTvDetails } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchLatestTvShow = (
  options?: RequestOptions<never>
): Observable<TMDbTvDetails | null> => {
  return new Request<never, TMDbTvDetails>({
    ...options,
    path: '/tv/latest'
  }).execute();
};
