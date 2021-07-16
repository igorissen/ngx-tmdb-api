import { Observable } from 'rxjs';
import { TMDbTvEpisodeGroupsDetails } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getDetails = (
  options: RequestOptions<never>
): Observable<TMDbTvEpisodeGroupsDetails | null> => {
  return new Request<never, TMDbTvEpisodeGroupsDetails>({
    ...options,
    path: `/tv/episode_group/${options.pathParams?.episode_group_id}`
  }).execute();
};
