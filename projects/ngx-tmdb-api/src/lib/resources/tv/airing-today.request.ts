/**
 * https://developers.themoviedb.org/3/tv/get-tv-airing-today
 */

import { Observable } from 'rxjs';
import { TMDbTvAiringToday } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchAiringTodayTvShows = (
  options?: RequestOptions<never>
): Observable<TMDbTvAiringToday | null> => {
  return new Request<never, TMDbTvAiringToday>({
    ...options,
    path: '/tv/airing_today'
  }).execute();
};
