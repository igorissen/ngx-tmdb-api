/**
 * https://developers.themoviedb.org/3/movies/get-movie-videos
 */

import { Observable } from 'rxjs';
import { TMDbMovieVideos } from '../../dtos/movies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const fetchMovieVideos = (
  options: RequestOptions<never>
): Observable<TMDbMovieVideos | null> => {
  return new Request<never, TMDbMovieVideos>({
    ...options,
    path: `/movie/${options.pathParams?.movie_id}/videos`
  }).execute();
};
