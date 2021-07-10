import { Observable } from 'rxjs';
import { TMDbChangeList } from '../../dtos/changes';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getMovieChangeList = (
  options: RequestOptions<never>
): Observable<TMDbChangeList | null> => {
  return new Request<never, TMDbChangeList>({
    ...options,
    path: `/movie/changes`
  }).execute();
};
