/**
 * https://developers.themoviedb.org/3/movies/get-similar-movies
 */

import { Observable } from 'rxjs';
import { TMDbMovieSimilarMovies } from '../../dtos/movies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchMovieSimilar = (
  options: RequestOptions<never>
): Observable<TMDbMovieSimilarMovies | null> => {
  return new Request<never, TMDbMovieSimilarMovies>({
    ...options,
    path: `/movie/${options.pathParams?.movie_id}/similar`
  }).execute();
};
