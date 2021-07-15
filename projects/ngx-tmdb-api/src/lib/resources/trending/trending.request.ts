import { Observable } from 'rxjs';
import { TMDbTrendingMedias } from '../../dtos/trending';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getTrending = (
  options: RequestOptions<never>
): Observable<TMDbTrendingMedias | null> => {
  const pathParams = options.pathParams;
  return new Request<never, TMDbTrendingMedias>({
    ...options,
    path: `/trending/${pathParams?.media_type}/${pathParams?.time_window}`
  }).execute();
};
