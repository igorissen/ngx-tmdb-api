/**
 * https://developers.themoviedb.org/3/tv/get-tv-account-states
 */

import { Observable } from 'rxjs';
import { TMDbTvAccountStates } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchTvAccountStates = (
  options: RequestOptions<never>
): Observable<TMDbTvAccountStates | null> => {
  return new Request<never, TMDbTvAccountStates>({
    ...options,
    path: `/tv/${options.pathParams?.tv_id}/account_states`
  }).execute();
};
