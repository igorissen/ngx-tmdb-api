import { Observable } from 'rxjs';
import { TMDbTvVideos } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getVideos = (
  options: RequestOptions<never>
): Observable<TMDbTvVideos | null> => {
  return new Request<never, TMDbTvVideos>({
    ...options,
    path: `/tv/${options.pathParams?.tv_id}/season/${options.pathParams?.season_number}/videos`
  }).execute();
};
