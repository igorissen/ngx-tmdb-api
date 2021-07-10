import { Observable } from 'rxjs';
import { TMDbTvChanges } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getChanges = (
  options: RequestOptions<never>
): Observable<TMDbTvChanges | null> => {
  return new Request<never, TMDbTvChanges>({
    ...options,
    path: `/tv/${options.pathParams?.tv_id}/changes`
  }).execute();
};
