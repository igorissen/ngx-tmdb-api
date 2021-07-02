/**
 * https://developers.themoviedb.org/3/tv/get-tv-keywords
 */

import { Observable } from 'rxjs';
import { TMDbTvKeywords } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchTvKeywords = (
  options: RequestOptions<never>
): Observable<TMDbTvKeywords | null> => {
  return new Request<never, TMDbTvKeywords>({
    ...options,
    path: `/tv/${options.pathParams?.tv_id}/keywords`
  }).execute();
};
