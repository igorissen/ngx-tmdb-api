import { Observable } from 'rxjs';
import { TMDbMovieExternalIds } from '../../dtos/movies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getExternalIds = (
  options: RequestOptions<never>
): Observable<TMDbMovieExternalIds | null> => {
  return new Request<never, TMDbMovieExternalIds>({
    ...options,
    path: `/movie/${options.pathParams?.movie_id}/external_ids`
  }).execute();
};
