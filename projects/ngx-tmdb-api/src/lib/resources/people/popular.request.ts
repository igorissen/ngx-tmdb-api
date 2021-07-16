import { Observable } from 'rxjs';
import { TMDbPeoplePopular } from '../../dtos/people';
import { Request } from '../../request';
import { RequestOptions } from '../../types';

export const getPopular = (
  options: RequestOptions<never>
): Observable<TMDbPeoplePopular | null> => {
  return new Request<never, TMDbPeoplePopular>({
    ...options,
    path: '/person/popular'
  }).execute();
};
