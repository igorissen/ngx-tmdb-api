import { Observable } from 'rxjs';
import { TMDbMovieTranslations } from '../../dtos/movies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getTranslations = (
  options: RequestOptions<never>
): Observable<TMDbMovieTranslations | null> => {
  return new Request<never, TMDbMovieTranslations>({
    ...options,
    path: `/movie/${options.pathParams?.movie_id}/translations`
  }).execute();
};
