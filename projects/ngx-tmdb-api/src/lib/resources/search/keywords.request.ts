import { Observable } from 'rxjs';
import { TMDbSearchKeywords } from '../../dtos/search';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const searchKeywords = (
  options: RequestOptions<never>
): Observable<TMDbSearchKeywords | null> => {
  return new Request<never, TMDbSearchKeywords>({
    ...options,
    path: '/search/keyword'
  }).execute();
};
