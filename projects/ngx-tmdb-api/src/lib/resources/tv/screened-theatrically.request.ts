import { Observable } from 'rxjs';
import { TMDbTvScreenedTheatrically } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getScreenedTheatrically = (
  options: RequestOptions<never>
): Observable<TMDbTvScreenedTheatrically | null> => {
  return new Request<never, TMDbTvScreenedTheatrically>({
    ...options,
    path: `/tv/${options.pathParams?.tv_id}/screened_theatrically`
  }).execute();
};
