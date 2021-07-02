/**
 * https://developers.themoviedb.org/3/tv/get-similar-tv-shows
 */

import { Observable } from 'rxjs';
import { TMDbTvSimilarTvShows } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchTvSimilar = (
  options: RequestOptions<never>
): Observable<TMDbTvSimilarTvShows | null> => {
  return new Request<never, TMDbTvSimilarTvShows>({
    ...options,
    path: `/tv/${options.pathParams?.tv_id}/similar`
  }).execute();
};
