import { Observable } from 'rxjs';
import { TMDbReviewDetails } from '../../dtos/reviews';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getDetails = (
  options: RequestOptions<never>
): Observable<TMDbReviewDetails | null> => {
  return new Request<never, TMDbReviewDetails>({
    ...options,
    path: `/review/${options.pathParams?.review_id}`
  }).execute();
};
