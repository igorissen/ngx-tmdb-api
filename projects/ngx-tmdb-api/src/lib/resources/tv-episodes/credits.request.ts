import { Observable } from 'rxjs';
import { TMDbTvCredits } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getCredits = (
  options: RequestOptions<never>
): Observable<TMDbTvCredits | null> => {
  return new Request<never, TMDbTvCredits>({
    ...options,
    path: `/tv/${options.pathParams?.tv_id}/season/${options.pathParams?.season_number}/episode/${options.pathParams?.episode_number}/credits`
  }).execute();
};
