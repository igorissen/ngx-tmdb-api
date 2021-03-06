import { Observable } from 'rxjs';
import { TMDbMovieReleaseDates } from '../../dtos/movies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getReleaseDates = (
  options: RequestOptions<never>
): Observable<TMDbMovieReleaseDates | null> => {
  return new Request<never, TMDbMovieReleaseDates>({
    ...options,
    path: `/movie/${options.pathParams?.movie_id}/release_dates`
  }).execute();
};
