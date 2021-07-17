import { Observable } from 'rxjs';
import { TMDbTvExternalIds } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getExternalIds = (
  options: RequestOptions<never>
): Observable<TMDbTvExternalIds | null> => {
  return new Request<never, TMDbTvExternalIds>({
    ...options,
    path: `/tv/${options.pathParams?.tv_id}/season/${options.pathParams?.season_number}/episode/${options.pathParams?.episode_number}/external_ids`
  }).execute();
};
