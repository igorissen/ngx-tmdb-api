import { Observable } from 'rxjs';
import { TMDbMovieGenresList } from '../../dtos/genres';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getMovieList = (
  options: RequestOptions<never>
): Observable<TMDbMovieGenresList | null> => {
  return new Request<never, TMDbMovieGenresList>({
    ...options,
    path: '/genre/movie/list'
  }).execute();
};
