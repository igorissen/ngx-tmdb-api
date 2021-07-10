import { Observable } from 'rxjs';
import { TMDbTvAlternativeTitles } from '../../dtos/tv';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getAlternativeTitles = (
  options: RequestOptions<never>
): Observable<TMDbTvAlternativeTitles | null> => {
  return new Request<never, TMDbTvAlternativeTitles>({
    ...options,
    path: `/tv/${options.pathParams?.tv_id}/alternative_titles`
  }).execute();
};
