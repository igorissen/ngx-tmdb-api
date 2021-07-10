import { Observable } from 'rxjs';
import { TMDbMovieUpcoming } from '../../dtos/movies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getUpcoming = (
  options?: RequestOptions<never>
): Observable<TMDbMovieUpcoming | null> => {
  return new Request<never, TMDbMovieUpcoming>({
    ...options,
    path: '/movie/upcoming'
  }).execute();
};
