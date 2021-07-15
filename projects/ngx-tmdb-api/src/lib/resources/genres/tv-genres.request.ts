import { Observable } from 'rxjs';
import { TMDbTvGenresList } from '../../dtos/genres';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getTvList = (
  options: RequestOptions<never>
): Observable<TMDbTvGenresList | null> => {
  return new Request<never, TMDbTvGenresList>({
    ...options,
    path: '/genre/tv/list'
  }).execute();
};
