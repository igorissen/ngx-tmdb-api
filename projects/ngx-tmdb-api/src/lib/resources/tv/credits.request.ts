/**
 * https://developers.themoviedb.org/3/tv/get-tv-credits
 */

import { Observable } from 'rxjs';
import { TMDbTvCredits } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchTvCredits = (
  options: RequestOptions<never>
): Observable<TMDbTvCredits | null> => {
  return new Request<never, TMDbTvCredits>({
    ...options,
    path: `/tv/${options.pathParams?.tv_id}/credits`
  }).execute();
};
