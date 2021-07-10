import { Observable } from 'rxjs';
import { TMDbTvEpisodeGroups } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getEpisodeGroups = (
  options: RequestOptions<never>
): Observable<TMDbTvEpisodeGroups | null> => {
  return new Request<never, TMDbTvEpisodeGroups>({
    ...options,
    path: `/tv/${options.pathParams?.tv_id}/episode_groups`
  }).execute();
};
