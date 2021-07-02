/**
 * https://developers.themoviedb.org/3/tv/get-tv-images
 */

import { Observable } from 'rxjs';
import { TMDbTvImages } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchTvImages = (
  options: RequestOptions<never>
): Observable<TMDbTvImages | null> => {
  return new Request<never, TMDbTvImages>({
    ...options,
    path: `/tv/${options.pathParams?.tv_id}/images`
  }).execute();
};
