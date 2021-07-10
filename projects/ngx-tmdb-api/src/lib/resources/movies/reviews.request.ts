import { Observable } from 'rxjs';
import { TMDbMovieReviews } from '../../dtos/movies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getReviews = (
  options: RequestOptions<never>
): Observable<TMDbMovieReviews | null> => {
  return new Request<never, TMDbMovieReviews>({
    ...options,
    path: `/movie/${options.pathParams?.movie_id}/similar`
  }).execute();
};
