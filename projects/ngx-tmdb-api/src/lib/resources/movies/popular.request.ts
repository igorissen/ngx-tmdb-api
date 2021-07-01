/**
 * https://developers.themoviedb.org/3/movies/get-popular-movies
 */

import { Observable } from 'rxjs';
import { TMDbMoviePopular } from '../../dtos/movies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchPopularMovies = (
  options?: RequestOptions<never>
): Observable<TMDbMoviePopular | null> => {
  return new Request<never, TMDbMoviePopular>({
    ...options,
    path: '/movie/popular'
  }).execute();
};
