import { Observable } from 'rxjs';
import { TMDbTvSeasonAccountStates } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getAccountStates = (
  options: RequestOptions<never>
): Observable<TMDbTvSeasonAccountStates | null> => {
  return new Request<never, TMDbTvSeasonAccountStates>({
    ...options,
    path: `/tv/${options.pathParams?.tv_id}/season/${options.pathParams?.season_number}/account_states`
  }).execute();
};
