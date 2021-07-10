import { Observable } from 'rxjs';
import { TMDbTvExternalIds } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getExternalIds = (
  options: RequestOptions<never>
): Observable<TMDbTvExternalIds | null> => {
  return new Request<never, TMDbTvExternalIds>({
    ...options,
    path: `/tv/${options.pathParams?.tv_id}/external_ids`
  }).execute();
};
