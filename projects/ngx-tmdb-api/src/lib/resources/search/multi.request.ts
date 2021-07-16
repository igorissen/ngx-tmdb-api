import { Observable } from 'rxjs';
import { TMDbSearchMulti } from '../../dtos/search';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const multiSearch = (
  options: RequestOptions<never>
): Observable<TMDbSearchMulti | null> => {
  return new Request<never, TMDbSearchMulti>({
    ...options,
    path: '/search/multi'
  }).execute();
};
