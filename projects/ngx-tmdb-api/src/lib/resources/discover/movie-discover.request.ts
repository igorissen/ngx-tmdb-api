import { Observable } from 'rxjs';
import { TMDbDiscoverMovie } from '../../dtos/discover';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const movieDiscover = (
  options: RequestOptions<never>
): Observable<TMDbDiscoverMovie | null> => {
  return new Request<never, TMDbDiscoverMovie>({
    ...options,
    path: '/discover/movie'
  }).execute();
};
