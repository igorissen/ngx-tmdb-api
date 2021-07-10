import { Observable } from 'rxjs';
import { TMDbTvReviews } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getReviews = (
  options: RequestOptions<never>
): Observable<TMDbTvReviews | null> => {
  return new Request<never, TMDbTvReviews>({
    ...options,
    path: `/tv/${options.pathParams?.tv_id}/similar`
  }).execute();
};
