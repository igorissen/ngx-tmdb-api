import { Observable } from 'rxjs';
import { TMDbTvAvailableProviders } from '../../dtos/watch-providers';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getTvProviders = (
  options: RequestOptions<never>
): Observable<TMDbTvAvailableProviders | null> => {
  return new Request<never, TMDbTvAvailableProviders>({
    ...options,
    path: '/watch/providers/tv'
  }).execute();
};
