import { Observable } from 'rxjs';
import { TMDbTvContentRatings } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getContentRatings = (
  options: RequestOptions<never>
): Observable<TMDbTvContentRatings | null> => {
  return new Request<never, TMDbTvContentRatings>({
    ...options,
    path: `/tv/${options.pathParams?.tv_id}/content_ratings`
  }).execute();
};
