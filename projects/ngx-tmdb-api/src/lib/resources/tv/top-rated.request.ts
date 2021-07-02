/**
 * https://developers.themoviedb.org/3/tv/get-top-rated-tv
 */

import { Observable } from 'rxjs';
import { TMDbTvTopRated } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchTopRatedTvShows = (
  options?: RequestOptions<never>
): Observable<TMDbTvTopRated | null> => {
  return new Request<never, TMDbTvTopRated>({
    ...options,
    path: '/tv/top_rated'
  }).execute();
};
