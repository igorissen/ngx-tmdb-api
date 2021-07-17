import { Observable } from 'rxjs';
import { TMDbTvSeasonDetails } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getDetails = (
  options: RequestOptions<never>
): Observable<TMDbTvSeasonDetails | null> => {
  return new Request<never, TMDbTvSeasonDetails>({
    ...options,
    path: `/tv/${options.pathParams?.tv_id}/season/${options.pathParams?.season_number}`
  }).execute();
};
