/**
 * https://developers.themoviedb.org/3/movies/get-upcoming
 */

import { Observable } from 'rxjs';
import { TMDbMovieUpcoming } from '../../dtos/movies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchUpcomingMovies = (
  options?: RequestOptions<never>
): Observable<TMDbMovieUpcoming | null> => {
  return new Request<never, TMDbMovieUpcoming>({
    ...options,
    path: '/movie/upcoming'
  }).execute();
};
