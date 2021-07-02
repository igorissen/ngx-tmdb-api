/**
 * https://developers.themoviedb.org/3/movies/get-movie-reviews
 */

import { Observable } from 'rxjs';
import { TMDbMovieReviews } from '../../dtos/movies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchMovieReviews = (
  options: RequestOptions<never>
): Observable<TMDbMovieReviews | null> => {
  return new Request<never, TMDbMovieReviews>({
    ...options,
    path: `/movie/${options.pathParams?.movie_id}/similar`
  }).execute();
};
