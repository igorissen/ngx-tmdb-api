import { Observable } from 'rxjs';
import { TMDbResponseStatus } from '../../dtos/common';
import { TMDbRateTvRequestDTO } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const deleteRating = (
  options: RequestOptions<never>
): Observable<TMDbResponseStatus | null> => {
  return new Request<never, TMDbResponseStatus>({
    ...options,
    method: 'DELETE',
    path: `/tv/${options.pathParams?.tv_id}/season/${options.pathParams?.season_number}/episode/${options.pathParams?.episode_number}/rating`
  }).execute();
};

export const rateTvEpisode = (
  options: RequestOptions<TMDbRateTvRequestDTO>
): Observable<TMDbResponseStatus | null> => {
  return new Request<TMDbRateTvRequestDTO, TMDbResponseStatus>({
    ...options,
    method: 'POST',
    path: `/tv/${options.pathParams?.tv_id}/season/${options.pathParams?.season_number}/episode/${options.pathParams?.episode_number}/rating`
  }).execute();
};
