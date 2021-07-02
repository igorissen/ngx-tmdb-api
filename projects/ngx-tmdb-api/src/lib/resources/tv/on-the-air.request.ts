/**
 * https://developers.themoviedb.org/3/tv/get-tv-on-the-air
 */

import { Observable } from 'rxjs';
import { TMDbTvOnTheAir } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchOnTheAirTvShows = (
  options?: RequestOptions<never>
): Observable<TMDbTvOnTheAir | null> => {
  return new Request<never, TMDbTvOnTheAir>({
    ...options,
    path: '/tv/on_the_air'
  }).execute();
};
