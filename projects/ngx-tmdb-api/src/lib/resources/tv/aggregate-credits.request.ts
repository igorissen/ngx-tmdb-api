/**
 * https://developers.themoviedb.org/3/tv/get-tv-aggregate-credits
 */

import { Observable } from 'rxjs';
import { TMDbTvAggregateCredits } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchTvAggregateCredits = (
  options: RequestOptions<never>
): Observable<TMDbTvAggregateCredits | null> => {
  return new Request<never, TMDbTvAggregateCredits>({
    ...options,
    path: `/tv/${options.pathParams?.tv_id}/aggregate_credits`
  }).execute();
};
