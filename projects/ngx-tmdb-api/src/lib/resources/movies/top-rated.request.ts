/**
 * https://developers.themoviedb.org/3/movies/get-top-rated-movies
 */

import { Observable } from 'rxjs';
import { TMDbMovieTopRated } from '../../dtos/movies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchTopRatedMovies = (
  options?: RequestOptions<never>
): Observable<TMDbMovieTopRated | null> => {
  return new Request<never, TMDbMovieTopRated>({
    ...options,
    path: '/movie/top_rated'
  }).execute();
};
