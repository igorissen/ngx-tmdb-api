import { Observable } from 'rxjs';
import { TMDbMovieAlternativeTitles } from '../../dtos/movies';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getAlternativeTitles = (
  options: RequestOptions<never>
): Observable<TMDbMovieAlternativeTitles | null> => {
  return new Request<never, TMDbMovieAlternativeTitles>({
    ...options,
    path: `/movie/${options.pathParams?.movie_id}/alternative_titles`
  }).execute();
};
