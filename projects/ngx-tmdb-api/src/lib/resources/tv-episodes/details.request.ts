import { Observable } from 'rxjs';
import { TMDbTvEpisodeDetails } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getDetails = (
  options: RequestOptions<never>
): Observable<TMDbTvEpisodeDetails | null> => {
  return new Request<never, TMDbTvEpisodeDetails>({
    ...options,
    path: `/tv/${options.pathParams?.tv_id}/season/${options.pathParams?.season_number}/episode/${options.pathParams?.episode_number}`
  }).execute();
};
