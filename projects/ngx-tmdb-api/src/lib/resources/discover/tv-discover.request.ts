import { Observable } from 'rxjs';
import { TMDbDiscoverTv } from '../../dtos/discover';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const tvDiscover = (
  options: RequestOptions<never>
): Observable<TMDbDiscoverTv | null> => {
  return new Request<never, TMDbDiscoverTv>({
    ...options,
    path: '/discover/tv'
  }).execute();
};
