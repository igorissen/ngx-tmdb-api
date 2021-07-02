/**
 * https://developers.themoviedb.org/3/tv/get-tv-videos
 */

import { Observable } from 'rxjs';
import { TMDbTvVideos } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchTvVideos = (
  options: RequestOptions<never>
): Observable<TMDbTvVideos | null> => {
  return new Request<never, TMDbTvVideos>({
    ...options,
    path: `/tv/${options.pathParams?.tv_id}/videos`
  }).execute();
};
