import { Observable } from 'rxjs';
import { TMDbResponseStatus } from '../../dtos/common';
import { TMDbRateTvRequestDTO } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

/**
 * https://developers.themoviedb.org/3/tv/delete-tv-show-rating
 *
 * @param options
 */
export const deleteTvRating = (
  options: RequestOptions<never>
): Observable<TMDbResponseStatus | null> => {
  return new Request<never, TMDbResponseStatus>({
    ...options,
    method: 'DELETE',
    path: `/tv/${options.pathParams?.tv_id}/rating`
  }).execute();
};

/**
 * https://developers.themoviedb.org/3/tv/rate-tv-show
 *
 * @param options
 */
export const rateTv = (
  options: RequestOptions<TMDbRateTvRequestDTO>
): Observable<TMDbResponseStatus | null> => {
  return new Request<TMDbRateTvRequestDTO, TMDbResponseStatus>({
    ...options,
    method: 'POST',
    path: `/tv/${options.pathParams?.tv_id}/rating`
  }).execute();
};
