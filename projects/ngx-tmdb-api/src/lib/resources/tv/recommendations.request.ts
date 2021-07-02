/**
 * https://developers.themoviedb.org/3/tv/get-tv-recommendations
 */

import { Observable } from 'rxjs';
import { TMDbTvRecommendations } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchTvRecommendations = (
  options: RequestOptions<never>
): Observable<TMDbTvRecommendations | null> => {
  return new Request<never, TMDbTvRecommendations>({
    ...options,
    path: `/tv/${options.pathParams?.tv_id}/recommendations`
  }).execute();
};
