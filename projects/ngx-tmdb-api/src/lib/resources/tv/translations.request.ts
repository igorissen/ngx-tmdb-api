/**
 * https://developers.themoviedb.org/3/tv/get-tv-translations
 */

import { Observable } from 'rxjs';
import { TMDbTvTranslations } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchTvTranslations = (
  options: RequestOptions<never>
): Observable<TMDbTvTranslations | null> => {
  return new Request<never, TMDbTvTranslations>({
    ...options,
    path: `/tv/${options.pathParams?.tv_id}/translations`
  }).execute();
};
