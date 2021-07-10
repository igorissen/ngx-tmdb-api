import { Observable } from 'rxjs';
import { TMDbTvDetails } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getDetails = (
  options: RequestOptions<never>
): Observable<TMDbTvDetails | null> => {
  return new Request<never, TMDbTvDetails>({
    ...options,
    path: `/tv/${options.pathParams?.tv_id}`
  }).execute();
};
