import { Observable } from 'rxjs';
import { TMDbTvTranslations } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getTranslations = (
  options: RequestOptions<never>
): Observable<TMDbTvTranslations | null> => {
  return new Request<never, TMDbTvTranslations>({
    ...options,
    path: `/tv/${options.pathParams?.tv_id}/season/${options.pathParams?.season_number}/translations`
  }).execute();
};
