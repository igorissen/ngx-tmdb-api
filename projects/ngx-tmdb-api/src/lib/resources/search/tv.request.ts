import { Observable } from 'rxjs';
import { TMDbSearchTvShows } from '../../dtos/search';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const searchTvShows = (
  options: RequestOptions<never>
): Observable<TMDbSearchTvShows | null> => {
  return new Request<never, TMDbSearchTvShows>({
    ...options,
    path: '/search/tv'
  }).execute();
};
