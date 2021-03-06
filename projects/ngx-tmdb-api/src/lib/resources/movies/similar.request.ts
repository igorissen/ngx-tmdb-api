import { Observable } from 'rxjs';
import { TMDbMovieSimilarMovies } from '../../dtos/movies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getSimilarMovies = (
  options: RequestOptions<never>
): Observable<TMDbMovieSimilarMovies | null> => {
  return new Request<never, TMDbMovieSimilarMovies>({
    ...options,
    path: `/movie/${options.pathParams?.movie_id}/similar`
  }).execute();
};
