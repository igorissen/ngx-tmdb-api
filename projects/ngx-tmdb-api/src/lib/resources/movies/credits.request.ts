/**
 * https://developers.themoviedb.org/3/movies/get-movie-credits
 */

import { Observable } from 'rxjs';
import { TMDbMovieCredits } from '../../dtos/movies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchMovieCredits = (
  options: RequestOptions<never>
): Observable<TMDbMovieCredits | null> => {
  return new Request<never, TMDbMovieCredits>({
    ...options,
    path: `/movie/${options.pathParams?.movie_id}/credits`
  }).execute();
};
