import { Observable } from 'rxjs';
import { TMDbTvImages } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getImages = (
  options: RequestOptions<never>
): Observable<TMDbTvImages | null> => {
  return new Request<never, TMDbTvImages>({
    ...options,
    path: `/tv/${options.pathParams?.tv_id}/season/${options.pathParams?.season_number}/images`
  }).execute();
};
