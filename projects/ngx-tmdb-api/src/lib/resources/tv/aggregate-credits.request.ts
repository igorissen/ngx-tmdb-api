import { Observable } from 'rxjs';
import { TMDbTvAggregateCredits } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getAggregateCredits = (
  options: RequestOptions<never>
): Observable<TMDbTvAggregateCredits | null> => {
  return new Request<never, TMDbTvAggregateCredits>({
    ...options,
    path: `/tv/${options.pathParams?.tv_id}/aggregate_credits`
  }).execute();
};
