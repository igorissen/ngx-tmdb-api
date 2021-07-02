/**
 * https://developers.themoviedb.org/3/tv/get-popular-tv-shows
 */

import { Observable } from 'rxjs';
import { TMDbTvPopular } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchPopularTvShows = (
  options?: RequestOptions<never>
): Observable<TMDbTvPopular | null> => {
  return new Request<never, TMDbTvPopular>({
    ...options,
    path: '/tv/popular'
  }).execute();
};
