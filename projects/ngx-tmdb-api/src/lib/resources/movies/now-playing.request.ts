/**
 * https://developers.themoviedb.org/3/movies/get-upcoming
 */

import { Observable } from 'rxjs';
import { TMDbMovieNowPlaying } from '../../dtos/movies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchNowPlayingMovies = (
  options?: RequestOptions<never>
): Observable<TMDbMovieNowPlaying | null> => {
  return new Request<never, TMDbMovieNowPlaying>({
    ...options,
    path: '/movie/now_playing'
  }).execute();
};
