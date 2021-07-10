import { Observable } from 'rxjs';
import { TMDbMovieWatchProviders } from '../../dtos/movies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getWatchProviders = (
  options: RequestOptions<never>
): Observable<TMDbMovieWatchProviders | null> => {
  return new Request<never, TMDbMovieWatchProviders>({
    ...options,
    path: `/movie/${options.pathParams?.movie_id}/watch/providers`
  }).execute();
};
