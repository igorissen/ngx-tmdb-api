import { Observable } from 'rxjs';
import { TMDbMoviePopular } from '../../dtos/movies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getPopular = (
  options?: RequestOptions<never>
): Observable<TMDbMoviePopular | null> => {
  return new Request<never, TMDbMoviePopular>({
    ...options,
    path: '/movie/popular'
  }).execute();
};
