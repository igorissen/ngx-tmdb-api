import { Observable } from 'rxjs';
import { TMDbSearchPeople } from '../../dtos/search';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const searchPeople = (
  options: RequestOptions<never>
): Observable<TMDbSearchPeople | null> => {
  return new Request<never, TMDbSearchPeople>({
    ...options,
    path: '/search/person'
  }).execute();
};
