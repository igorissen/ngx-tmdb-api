import { Observable } from 'rxjs';
import { TMDbKeywordMoviesList } from '../../dtos/keywords';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getMovies = (
  options: RequestOptions<never>
): Observable<TMDbKeywordMoviesList | null> => {
  return new Request<never, TMDbKeywordMoviesList>({
    ...options,
    path: `/keyword/${options.pathParams?.keyword_id}/movies`
  }).execute();
};
